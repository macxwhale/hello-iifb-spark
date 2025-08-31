
import { useEffect, useState, useRef } from 'react';
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footerLoaded, setFooterLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [footerContent, setFooterContent] = useState<string>('');
  const addedStylesRef = useRef<string[]>([]);
  const addedScriptsRef = useRef<string[]>([]);

  // WordPress and Elementor resources
  const wpResources = {
    styles: [
      'https://iifb-indigenous.org/wp-content/themes/heart-child/style.css',
      'https://iifb-indigenous.org/wp-content/themes/heart/style.css',
      'https://iifb-indigenous.org/wp-content/plugins/elementor/assets/css/frontend.min.css',
      'https://iifb-indigenous.org/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css',
      'https://iifb-indigenous.org/wp-content/uploads/elementor/css/post-18536.css'
    ],
    scripts: [
      'https://iifb-indigenous.org/wp-includes/js/jquery/jquery.min.js',
      'https://iifb-indigenous.org/wp-includes/js/jquery/jquery-migrate.min.js',
      'https://iifb-indigenous.org/wp-content/plugins/elementor/assets/js/frontend.min.js',
      'https://iifb-indigenous.org/wp-content/plugins/elementor/assets/lib/elements-handlers.min.js',
      'https://iifb-indigenous.org/wp-content/uploads/elementor/js/post-18536.js'
    ]
  };

  // Function to decode JSON-escaped HTML
  const decodeHtml = (html: string): string => {
    try {
      // First, try to parse as JSON in case it's double-encoded
      let decoded = html;
      
      // Handle common JSON escape sequences
      decoded = decoded
        .replace(/\\u003C/g, '<')
        .replace(/\\u003E/g, '>')
        .replace(/\\u0026/g, '&')
        .replace(/\\u0022/g, '"')
        .replace(/\\u0027/g, "'")
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\r/g, '\r')
        .replace(/\\\\/g, '\\');
      
      return decoded;
    } catch (e) {
      console.warn('Failed to decode HTML, using original:', e);
      return html;
    }
  };

  // Load WordPress styles and scripts
  const loadWpResources = () => {
    console.log('Loading WordPress resources...');
    
    // Load styles
    wpResources.styles.forEach((href) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
        addedStylesRef.current.push(href);
        console.log('Added stylesheet:', href);
      }
    });

    // Load scripts
    wpResources.scripts.forEach((src) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Maintain load order for jQuery dependencies
        document.head.appendChild(script);
        addedScriptsRef.current.push(src);
        console.log('Added script:', src);
      }
    });
  };

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        console.log('Loading WordPress resources and fetching footer...');
        
        // Load WordPress resources first
        loadWpResources();
        
        const response = await fetch("https://iifb-indigenous.org/wp-json/custom/v1/footer", {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('WordPress footer data received:', data);
        
        // Insert additional styles if provided by API
        if (data.styles && Array.isArray(data.styles)) {
          console.log('Loading additional styles from API:', data.styles);
          data.styles.forEach((href: string) => {
            const existingLink = document.querySelector(`link[href="${href}"]`);
            if (!existingLink) {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = href;
              document.head.appendChild(link);
              addedStylesRef.current.push(href);
              console.log('Added additional stylesheet:', href);
            }
          });
        }

        // Set footer content via React state with proper HTML decoding
        if (data.html) {
          const decodedHtml = decodeHtml(data.html);
          console.log('Decoded HTML length:', decodedHtml.length);
          console.log('Decoded HTML preview:', decodedHtml.substring(0, 200) + '...');
          
          setFooterContent(decodedHtml);
          setFooterLoaded(true);
        } else {
          console.warn('No HTML content received from WordPress API');
          throw new Error('No HTML content received');
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching WordPress footer:', error);
        setError('Failed to load WordPress footer');
        
        // Set fallback content via React state
        setFooterContent(`
          <div class="container mx-auto px-4 text-center">
            <p class="text-white/80">International Indigenous Forum on Biodiversity</p>
            <p class="text-white/60 text-sm mt-2">Footer content temporarily unavailable</p>
          </div>
        `);
      }
    };

    fetchFooter();

    // Cleanup function to remove added stylesheets and scripts
    return () => {
      addedStylesRef.current.forEach(href => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      addedScriptsRef.current.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      addedStylesRef.current = [];
      addedScriptsRef.current = [];
    };
  }, []);

  return (
    <footer className="bg-iifb-footer-bg text-white py-16 relative">
      <div id="wp-footer">
        {footerLoaded || error ? (
          <div dangerouslySetInnerHTML={{ __html: footerContent }} />
        ) : (
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/80">Loading footer...</p>
          </div>
        )}
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;

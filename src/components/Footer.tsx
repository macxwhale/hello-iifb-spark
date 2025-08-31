
import { useEffect, useState, useRef } from 'react';
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footerLoaded, setFooterLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [footerContent, setFooterContent] = useState<string>('');
  const addedStylesRef = useRef<string[]>([]);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
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
        
        // Insert styles safely
        if (data.styles && Array.isArray(data.styles)) {
          data.styles.forEach((href: string) => {
            // Check if the stylesheet is already loaded to avoid duplicates
            const existingLink = document.querySelector(`link[href="${href}"]`);
            if (!existingLink) {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = href;
              document.head.appendChild(link);
              addedStylesRef.current.push(href);
            }
          });
        }

        // Set footer content via React state instead of direct DOM manipulation
        if (data.html) {
          setFooterContent(data.html);
          setFooterLoaded(true);
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

    // Cleanup function to remove added stylesheets
    return () => {
      addedStylesRef.current.forEach(href => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      addedStylesRef.current = [];
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

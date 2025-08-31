
import { useEffect, useState } from 'react';
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footerLoaded, setFooterLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        // Try fetching with no-cors mode first
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
        
        // Insert styles
        if (data.styles && Array.isArray(data.styles)) {
          data.styles.forEach((href: string) => {
            // Check if the stylesheet is already loaded to avoid duplicates
            const existingLink = document.querySelector(`link[href="${href}"]`);
            if (!existingLink) {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = href;
              document.head.appendChild(link);
            }
          });
        }

        // Insert footer HTML
        const footerElement = document.getElementById("wp-footer");
        if (footerElement && data.html) {
          footerElement.innerHTML = data.html;
          setFooterLoaded(true);
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching WordPress footer:', error);
        setError('Failed to load WordPress footer');
        
        // Fallback: Show a basic footer message
        const footerElement = document.getElementById("wp-footer");
        if (footerElement) {
          footerElement.innerHTML = `
            <div class="container mx-auto px-4 text-center">
              <p class="text-white/80">International Indigenous Forum on Biodiversity</p>
              <p class="text-white/60 text-sm mt-2">Footer content temporarily unavailable</p>
            </div>
          `;
        }
      }
    };

    fetchFooter();
  }, []);

  return (
    <footer className="bg-iifb-footer-bg text-white py-16 relative">
      <div id="wp-footer">
        {/* WordPress footer content will be inserted here */}
        {!footerLoaded && !error && (
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

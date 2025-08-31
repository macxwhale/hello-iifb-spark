
import { useEffect } from 'react';
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  useEffect(() => {
    fetch("https://iifb-indigenous.org/wp-json/custom/v1/footer")
      .then(res => res.json())
      .then(data => {
        // Insert styles
        data.styles.forEach(href => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = href;
          document.head.appendChild(link);
        });

        // Insert footer HTML
        const footerElement = document.getElementById("wp-footer");
        if (footerElement) {
          footerElement.innerHTML = data.html;
        }
      })
      .catch(error => {
        console.error('Error fetching WordPress footer:', error);
      });
  }, []);

  return (
    <footer className="bg-iifb-footer-bg text-white py-16 relative">
      <div id="wp-footer">
        {/* WordPress footer content will be inserted here */}
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;

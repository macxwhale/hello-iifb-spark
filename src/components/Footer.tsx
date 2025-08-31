
import { useEffect, useState } from "react";
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footerHtml, setFooterHtml] = useState("");

  useEffect(() => {
    fetch("https://iifb-indigenous.org/wp-json/custom/v1/footer")
      .then(res => res.json())
      .then(data => setFooterHtml(data.html))
      .catch(err => console.error(err));
  }, []);

  return (
    <footer className="relative">
      <div
        className="wp-footer"
        dangerouslySetInnerHTML={{ __html: footerHtml }}
      />
      <BackToTop />
    </footer>
  );
};

export default Footer;

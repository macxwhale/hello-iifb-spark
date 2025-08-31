
import { useEffect, useState } from "react";
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footer, setFooter] = useState({ html: "", styles: [], scripts: [] });

  useEffect(() => {
    fetch("https://iifb-indigenous.org/wp-json/custom/v1/footer")
      .then(res => res.json())
      .then(data => setFooter(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <footer className="relative">
      {/* Inject CSS */}
      {footer.styles.map((href, i) => (
        <link key={i} rel="stylesheet" href={href} />
      ))}

      {/* Inject HTML */}
      <div
        className="wp-footer"
        dangerouslySetInnerHTML={{ __html: footer.html }}
      />

      {/* Inject JS */}
      {footer.scripts.map((src, i) => (
        <script key={i} src={src}></script>
      ))}

      <BackToTop />
    </footer>
  );
};

export default Footer;

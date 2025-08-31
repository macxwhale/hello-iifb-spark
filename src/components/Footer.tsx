
import { useEffect, useState } from "react";
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footer, setFooter] = useState({ html: "", styles: [], scripts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchFooter = async (attempt = 1) => {
    try {
      console.log(`🔄 Footer API: Attempting to fetch footer (attempt ${attempt}/3)`);
      console.log(`📡 Footer API: Fetching from https://iifb-indigenous.org/wp-json/custom/v1/footer`);
      
      setLoading(true);
      setError(null);

      const response = await fetch("https://iifb-indigenous.org/wp-json/custom/v1/footer", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors'
      });

      console.log(`📊 Footer API: Response status: ${response.status} ${response.statusText}`);
      console.log(`📊 Footer API: Response headers:`, Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(`✅ Footer API: Successfully fetched data:`, data);
      console.log(`📝 Footer API: HTML length: ${data.html?.length || 0} characters`);
      console.log(`🎨 Footer API: Styles count: ${data.styles?.length || 0}`);
      console.log(`📜 Footer API: Scripts count: ${data.scripts?.length || 0}`);

      setFooter(data);
      setLoading(false);
      setRetryCount(0);

    } catch (err) {
      console.error(`❌ Footer API: Error on attempt ${attempt}:`, err);
      
      if (attempt < 3) {
        console.log(`🔄 Footer API: Retrying in 2 seconds... (attempt ${attempt + 1}/3)`);
        setTimeout(() => {
          setRetryCount(attempt);
          fetchFooter(attempt + 1);
        }, 2000);
      } else {
        console.error(`💥 Footer API: All attempts failed. Final error:`, err);
        setError(err instanceof Error ? err.message : 'Failed to load footer');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  // Loading state
  if (loading) {
    return (
      <footer className="relative bg-muted/50 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-3 text-muted-foreground">Loading footer...</span>
          {retryCount > 0 && <span className="ml-2 text-sm">Retry {retryCount}/3</span>}
        </div>
        <BackToTop />
      </footer>
    );
  }

  // Error state with fallback
  if (error) {
    console.warn(`⚠️ Footer API: Displaying fallback footer due to error: ${error}`);
    return (
      <footer className="relative bg-muted/30 border-t">
        {/* Fallback footer content */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-4">© 2024 International Indigenous Forum on Biodiversity</p>
            <button 
              onClick={() => {
                console.log(`🔄 Footer API: Manual retry requested`);
                setRetryCount(0);
                fetchFooter();
              }}
              className="text-primary hover:text-primary/80 underline text-sm"
            >
              Retry loading footer
            </button>
            <p className="text-xs mt-2 text-red-500">Footer API Error: {error}</p>
          </div>
        </div>
        <BackToTop />
      </footer>
    );
  }

  // Success state - render WordPress footer
  console.log(`🎯 Footer API: Rendering WordPress footer with ${footer.html.length} characters`);
  
  return (
    <footer className="relative">
      {/* Inject CSS */}
      {footer.styles && footer.styles.length > 0 && (
        <>
          {console.log(`🎨 Footer API: Injecting ${footer.styles.length} stylesheets`)}
          {footer.styles.map((href, i) => {
            console.log(`🎨 Footer API: Injecting stylesheet ${i + 1}: ${href}`);
            return <link key={i} rel="stylesheet" href={href} />;
          })}
        </>
      )}

      {/* Inject HTML */}
      {footer.html ? (
        <>
          {console.log(`📝 Footer API: Injecting HTML content (${footer.html.length} chars)`)}
          <div
            className="wp-footer"
            dangerouslySetInnerHTML={{ __html: footer.html }}
          />
        </>
      ) : (
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>Footer content is loading...</p>
        </div>
      )}

      {/* Inject JS */}
      {footer.scripts && footer.scripts.length > 0 && (
        <>
          {console.log(`📜 Footer API: Injecting ${footer.scripts.length} scripts`)}
          {footer.scripts.map((src, i) => {
            console.log(`📜 Footer API: Injecting script ${i + 1}: ${src}`);
            return <script key={i} src={src}></script>;
          })}
        </>
      )}

      <BackToTop />
    </footer>
  );
};

export default Footer;

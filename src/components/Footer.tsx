
import { useEffect, useState } from "react";
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footer, setFooter] = useState({ html: "", styles: [], scripts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data fallback for testing
  const mockFooter = {
    html: `
      <div class="wp-footer bg-muted/30 border-t">
        <div class="container mx-auto px-4 py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="font-semibold text-lg mb-4">International Indigenous Forum on Biodiversity</h3>
              <p class="text-muted-foreground text-sm">Promoting Indigenous voices in biodiversity conservation and governance worldwide.</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="/about" class="text-muted-foreground hover:text-foreground">About IIFB</a></li>
                <li><a href="/news" class="text-muted-foreground hover:text-foreground">Latest News</a></li>
                <li><a href="/documents" class="text-muted-foreground hover:text-foreground">Documents</a></li>
                <li><a href="/side-events" class="text-muted-foreground hover:text-foreground">Side Events</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Contact</h4>
              <p class="text-muted-foreground text-sm">International Indigenous Forum on Biodiversity</p>
              <p class="text-muted-foreground text-sm">© 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    `,
    styles: [],
    scripts: []
  };

  const fetchFooterWithProxy = async (url: string) => {
    console.log(`🔄 Footer API: Trying CORS proxy for ${url}`);
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error(`Proxy failed: ${response.status}`);
    }
    
    const data = await response.json();
    return JSON.parse(data.contents);
  };

  const testApiDirectly = async () => {
    const apiUrl = "https://iifb-indigenous.org/wp-json/custom/v1/footer";
    
    try {
      console.log(`🧪 Footer API: Testing direct access to ${apiUrl}`);
      
      // Test if API is accessible
      const response = await fetch(apiUrl, {
        method: 'HEAD',
        mode: 'no-cors'
      });
      
      console.log(`📊 Footer API: HEAD request completed`);
      return true;
    } catch (err) {
      console.log(`❌ Footer API: Direct access test failed:`, err);
      return false;
    }
  };

  const fetchFooter = async () => {
    const apiUrl = "https://iifb-indigenous.org/wp-json/custom/v1/footer";
    
    try {
      console.log(`🔄 Footer API: Attempting to fetch footer data`);
      setLoading(true);
      setError(null);

      // First try direct API call
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ Footer API: Direct call successful`, data);
          setFooter(data);
          setLoading(false);
          return;
        }
      } catch (directError) {
        console.log(`⚠️ Footer API: Direct call failed, trying proxy...`, directError);
      }

      // If direct call fails, try CORS proxy
      try {
        const proxyData = await fetchFooterWithProxy(apiUrl);
        console.log(`✅ Footer API: Proxy call successful`, proxyData);
        setFooter(proxyData);
        setLoading(false);
        return;
      } catch (proxyError) {
        console.log(`⚠️ Footer API: Proxy call failed`, proxyError);
      }

      // If both fail, use mock data
      console.log(`🎭 Footer API: Using mock data as fallback`);
      setFooter(mockFooter);
      setLoading(false);

    } catch (err) {
      console.error(`💥 Footer API: All methods failed:`, err);
      setError(err instanceof Error ? err.message : 'Failed to load footer');
      setFooter(mockFooter); // Use mock data even on error
      setLoading(false);
    }
  };

  useEffect(() => {
    // Test API accessibility first
    testApiDirectly().then(() => {
      fetchFooter();
    });
  }, []);

  // Loading state
  if (loading) {
    return (
      <footer className="relative bg-muted/50 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-3 text-muted-foreground">Loading footer...</span>
        </div>
        <BackToTop />
      </footer>
    );
  }

  // Success state - render footer content
  console.log(`🎯 Footer API: Rendering footer with ${footer.html.length} characters`);
  
  return (
    <footer className="relative" id="wp-footer">
      {/* Inject CSS */}
      {footer.styles && footer.styles.length > 0 && (
        <>
          {footer.styles.map((href, i) => (
            <link key={i} rel="stylesheet" href={href} />
          ))}
        </>
      )}

      {/* Inject HTML */}
      {footer.html ? (
        <div
          className="footer-content"
          dangerouslySetInnerHTML={{ __html: footer.html }}
        />
      ) : (
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>Footer content is loading...</p>
        </div>
      )}

      {/* Inject JS */}
      {footer.scripts && footer.scripts.length > 0 && (
        <>
          {footer.scripts.map((src, i) => (
            <script key={i} src={src}></script>
          ))}
        </>
      )}

      {/* Show error message if there was an issue but we're using fallback */}
      {error && (
        <div className="text-center py-2 text-xs text-amber-600 bg-amber-50 border-t">
          Using fallback footer content (API: {error})
        </div>
      )}

      <BackToTop />
    </footer>
  );
};

export default Footer;

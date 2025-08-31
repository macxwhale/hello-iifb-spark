
import { useEffect, useState } from "react";
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  const [footerHtml, setFooterHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data fallback for testing
  const mockFooterHtml = `
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
  `;

  const extractAndInjectResources = (html: string) => {
    console.log(`🔧 Footer: Extracting CSS and JS resources from HTML`);
    
    // Extract CSS links
    const cssLinkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*>/gi;
    const cssLinks = html.match(cssLinkRegex) || [];
    
    // Extract script tags
    const scriptRegex = /<script[^>]*src=["'][^"']*["'][^>]*><\/script>/gi;
    const scriptTags = html.match(scriptRegex) || [];
    
    console.log(`📊 Footer: Found ${cssLinks.length} CSS links and ${scriptTags.length} script tags`);
    
    // Inject CSS links into document head
    cssLinks.forEach((linkTag, index) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = linkTag;
      const linkElement = tempDiv.querySelector('link');
      
      if (linkElement && !document.querySelector(`link[href="${linkElement.href}"]`)) {
        document.head.appendChild(linkElement);
        console.log(`✅ Footer: Injected CSS ${index + 1}: ${linkElement.href}`);
      }
    });
    
    // Inject script tags into document head
    scriptTags.forEach((scriptTag, index) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = scriptTag;
      const scriptElement = tempDiv.querySelector('script');
      
      if (scriptElement && !document.querySelector(`script[src="${scriptElement.src}"]`)) {
        const newScript = document.createElement('script');
        newScript.src = scriptElement.src;
        newScript.async = true;
        document.head.appendChild(newScript);
        console.log(`✅ Footer: Injected JS ${index + 1}: ${scriptElement.src}`);
      }
    });
    
    // Clean HTML by removing extracted links and scripts
    let cleanHtml = html
      .replace(cssLinkRegex, '')
      .replace(scriptRegex, '');
    
    return cleanHtml;
  };

  const fetchFooter = async () => {
    const apiUrl = "https://iifb-indigenous.org/wp-json/custom/v1/footer";
    
    try {
      console.log(`🔄 Footer API: Fetching footer data from ${apiUrl}`);
      setLoading(true);
      setError(null);

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
        console.log(`✅ Footer API: Successfully fetched footer data`);
        
        if (data.html) {
          const cleanHtml = extractAndInjectResources(data.html);
          setFooterHtml(cleanHtml);
          console.log(`🎯 Footer: Processed HTML with ${cleanHtml.length} characters`);
        } else {
          throw new Error('No HTML content in API response');
        }
        
        setLoading(false);
        return;
      } else {
        throw new Error(`API returned ${response.status}`);
      }

    } catch (err) {
      console.error(`💥 Footer API: Failed to fetch footer:`, err);
      setError(err instanceof Error ? err.message : 'Failed to load footer');
      
      // Use mock data as fallback
      console.log(`🎭 Footer: Using mock data as fallback`);
      setFooterHtml(mockFooterHtml);
      setLoading(false);
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
        </div>
        <BackToTop />
      </footer>
    );
  }

  // Success state - render footer content
  console.log(`🎯 Footer: Rendering footer with ${footerHtml.length} characters`);
  
  return (
    <footer className="relative" id="wp-footer">
      {/* Render WordPress footer HTML */}
      {footerHtml ? (
        <div
          className="footer-content"
          dangerouslySetInnerHTML={{ __html: footerHtml }}
        />
      ) : (
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>Footer content is loading...</p>
        </div>
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

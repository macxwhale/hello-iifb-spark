
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import SBSTTA27 from "./pages/SBSTTA27";
import SBSTTA27About from "./pages/SBSTTA27About";
import SBSTTA27Statements from "./pages/SBSTTA27Statements";
import SBSTTA27Documents from "./pages/SBSTTA27Documents";
import SBSTTA27SideEvents from "./pages/SBSTTA27SideEvents";
import SBSTTA27Articles from "./pages/SBSTTA27Articles";
import SBSTTA27Videos from "./pages/SBSTTA27Videos";
import SBSTTA27Gallery from "./pages/SBSTTA27Gallery";
import SB8J1About from "./pages/SB8J1About";
import SB8J1Statements from "./pages/SB8J1Statements";
import SB8J1Documents from "./pages/SB8J1Documents";
import SB8J1News from "./pages/SB8J1News";
import SB8J1SideEvents from "./pages/SB8J1SideEvents";
import AllSideEvents from "./pages/AllSideEvents";
import SB8J1MediaCoverage from "./pages/SB8J1MediaCoverage";
import SB8J1SocialToolkit from "./pages/SB8J1SocialToolkit";
import SB8J1PressConferences from "./pages/SB8J1PressConferences";
import SB8J1Articles from "./pages/SB8J1Articles";
import SB8J1Videos from "./pages/SB8J1Videos";
import SB8J1Gallery from "./pages/SB8J1Gallery";
import Documents from "./pages/Documents";
import Resources from "./pages/Resources";
import About from "./pages/About";
import News from "./pages/News";
import SideEvents from "./pages/SideEvents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="iifb-app">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="sbstta-27" element={<Navigate to="/sbstta-27/about" replace />} />
            <Route path="sbstta-27/about" element={<SBSTTA27About />} />
            <Route path="sbstta-27/statements" element={<SBSTTA27Statements />} />
            <Route path="sbstta-27/documents" element={<SBSTTA27Documents />} />
            <Route path="sbstta-27/side-events" element={<SBSTTA27SideEvents />} />
            <Route path="sbstta-27/articles" element={<SBSTTA27Articles />} />
            <Route path="sbstta-27/videos" element={<SBSTTA27Videos />} />
            <Route path="sbstta-27/gallery" element={<SBSTTA27Gallery />} />
            <Route path="sb8j-1" element={<Navigate to="/sb8j-1/about" replace />} />
            <Route path="sb8j-1/about" element={<SB8J1About />} />
            <Route path="sb8j-1/statements" element={<SB8J1Statements />} />
            <Route path="sb8j-1/documents" element={<SB8J1Documents />} />
            <Route path="sb8j-1/news" element={<SB8J1News />} />
            <Route path="sb8j-1/media-coverage" element={<SB8J1MediaCoverage />} />
            <Route path="sb8j-1/social-toolkit" element={<SB8J1SocialToolkit />} />
            <Route path="sb8j-1/press-conferences" element={<SB8J1PressConferences />} />
            <Route path="sb8j-1/articles" element={<SB8J1Articles />} />
            <Route path="sb8j-1/videos" element={<SB8J1Videos />} />
            <Route path="sb8j-1/gallery" element={<SB8J1Gallery />} />
            <Route path="sb8j-1/side-events" element={<SB8J1SideEvents />} />
            <Route path="sb8j-1/side-events/all" element={<AllSideEvents />} />
            <Route path="documents" element={<Documents />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="side-events" element={<SideEvents />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </div>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SBSTTA27 from "./pages/SBSTTA27";
import SB8J1 from "./pages/SB8J1";
import SideEvents from "./pages/SideEvents";
import SB8J1About from "./pages/SB8J1About";
import SB8J1Documents from "./pages/SB8J1Documents";
import SB8J1SideEvents from "./pages/SB8J1SideEvents";
import SB8J1Statements from "./pages/SB8J1Statements";
import SB8J1Gallery from "./pages/SB8J1Gallery";
import SB8J1Videos from "./pages/SB8J1Videos";
import SBSTTA27About from "./pages/SBSTTA27About";
import SBSTTA27Documents from "./pages/SBSTTA27Documents";
import SBSTTA27SideEvents from "./pages/SBSTTA27SideEvents";
import SBSTTA27Statements from "./pages/SBSTTA27Statements";
import SBSTTA27Gallery from "./pages/SBSTTA27Gallery";
import SBSTTA27Videos from "./pages/SBSTTA27Videos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/sbstta-27" element={<Layout><SBSTTA27 /></Layout>} />
            <Route path="/sb8j-1" element={<Layout><SB8J1 /></Layout>} />
            <Route path="/side-events/all" element={<Layout><SideEvents /></Layout>} />
            
            {/* SB8J-1 Routes */}
            <Route path="/sb8j-1/about" element={<Layout><SB8J1About /></Layout>} />
            <Route path="/sb8j-1/documents" element={<Layout><SB8J1Documents /></Layout>} />
            <Route path="/sb8j-1/side-events" element={<Layout><SB8J1SideEvents /></Layout>} />
            <Route path="/sb8j-1/statements" element={<Layout><SB8J1Statements /></Layout>} />
            <Route path="/sb8j-1/gallery" element={<Layout><SB8J1Gallery /></Layout>} />
            <Route path="/sb8j-1/videos" element={<Layout><SB8J1Videos /></Layout>} />
            
            {/* SBSTTA-27 Routes */}
            <Route path="/sbstta-27/about" element={<Layout><SBSTTA27About /></Layout>} />
            <Route path="/sbstta-27/documents" element={<Layout><SBSTTA27Documents /></Layout>} />
            <Route path="/sbstta-27/side-events" element={<Layout><SBSTTA27SideEvents /></Layout>} />
            <Route path="/sbstta-27/statements" element={<Layout><SBSTTA27Statements /></Layout>} />
            <Route path="/sbstta-27/gallery" element={<Layout><SBSTTA27Gallery /></Layout>} />
            <Route path="/sbstta-27/videos" element={<Layout><SBSTTA27Videos /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

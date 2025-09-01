
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Index";
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
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sbstta-27" element={<SBSTTA27 />} />
              <Route path="sb8j-1" element={<SB8J1 />} />
              <Route path="side-events/all" element={<SideEvents />} />
              
              {/* SB8J-1 Routes */}
              <Route path="sb8j-1/about" element={<SB8J1About />} />
              <Route path="sb8j-1/documents" element={<SB8J1Documents />} />
              <Route path="sb8j-1/side-events" element={<SB8J1SideEvents />} />
              <Route path="sb8j-1/statements" element={<SB8J1Statements />} />
              <Route path="sb8j-1/gallery" element={<SB8J1Gallery />} />
              <Route path="sb8j-1/videos" element={<SB8J1Videos />} />
              
              {/* SBSTTA-27 Routes */}
              <Route path="sbstta-27/about" element={<SBSTTA27About />} />
              <Route path="sbstta-27/documents" element={<SBSTTA27Documents />} />
              <Route path="sbstta-27/side-events" element={<SBSTTA27SideEvents />} />
              <Route path="sbstta-27/statements" element={<SBSTTA27Statements />} />
              <Route path="sbstta-27/gallery" element={<SBSTTA27Gallery />} />
              <Route path="sbstta-27/videos" element={<SBSTTA27Videos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

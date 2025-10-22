
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Visualization from "./pages/Visualization";
import VisualizationProject from "./pages/VisualizationProject";
import Furniture from "./pages/Furniture";
import FurnitureProject from "./pages/FurnitureProject";
import Residential from "./pages/Residential";
import ResidentialProject from "./pages/ResidentialProject";
import Cafes from "./pages/Cafes";
import CafesProject from "./pages/CafesProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/visualization/:id" element={<VisualizationProject />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/furniture/:id" element={<FurnitureProject />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/residential/:id" element={<ResidentialProject />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/cafes/:id" element={<CafesProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import PkwGutachten from "./pages/PkwGutachten";
import LkwGutachten from "./pages/LkwGutachten";
import ElektroHybrid from "./pages/ElektroHybrid";
import MotorradGutachten from "./pages/MotorradGutachten";
import OldtimerGutachten from "./pages/OldtimerGutachten";
import Bagatellschaeden from "./pages/Bagatellschaeden";
import KontaktPage from "./pages/KontaktPage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
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
          <Route path="/kfz-gutachten" element={<Layout><PkwGutachten /></Layout>} />
          <Route path="/lkw-gutachten" element={<Layout><LkwGutachten /></Layout>} />
          <Route path="/gutachter-elektro-hybrid" element={<Layout><ElektroHybrid /></Layout>} />
          <Route path="/motorrad-gutachten" element={<Layout><MotorradGutachten /></Layout>} />
          <Route path="/oldtimer-gutachten" element={<Layout><OldtimerGutachten /></Layout>} />
          <Route path="/bagatellschaeden" element={<Layout><Bagatellschaeden /></Layout>} />
          <Route path="/kontakt" element={<Layout><KontaktPage /></Layout>} />
          <Route path="/impressum" element={<Layout><Impressum /></Layout>} />
          <Route path="/datenschutz" element={<Layout><Datenschutz /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Treatment from "./pages/Treatment";
import OnlineTherapy from "./pages/OnlineTherapy";
import Prices from "./pages/Prices";
import Practical from "./pages/Practical";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/behandling" element={<Treatment />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/tratamiento" element={<Treatment />} />
          <Route path="/tratamento" element={<Treatment />} />
          <Route path="/online-terapi" element={<OnlineTherapy />} />
          <Route path="/online-therapy" element={<OnlineTherapy />} />
          <Route path="/terapia-online" element={<OnlineTherapy />} />
          <Route path="/priser" element={<Prices />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/precios" element={<Prices />} />
          <Route path="/precos" element={<Prices />} />
          <Route path="/praktisk" element={<Practical />} />
          <Route path="/practical" element={<Practical />} />
          <Route path="/practico" element={<Practical />} />
          <Route path="/pratico" element={<Practical />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privatlivspolitik" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/vilkar" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

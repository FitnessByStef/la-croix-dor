import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import Footer from "./components/layout/Footer";
import NosMarquesPage from "./pages/NosMarquesPage";
import CgvPage from "./pages/CgvPage";
import NosServicesPage from "./pages/NosServicesPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-light">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nos-marques" element={<NosMarquesPage />} />
          <Route path="/nos-services" element={<NosServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/cgv" element={<CgvPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

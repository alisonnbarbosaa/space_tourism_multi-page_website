import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Crew from "./components/pages/crew/Crew_commander";
import Technology from "./components/pages/technology/Technology_vehicle";

import Destination_moon from "./components/pages/destination/Destination_moon";
import Destination_mars from "./components/pages/destination/Destination_mars";
import Destination_europa from "./components/pages/destination/Destination_europa";
import Destination_titan from "./components/pages/destination/Destination_titan";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [bg, setBg] = useState("");
  const location = useLocation();

  useEffect(() => {
    // verifica qual é a página atual e muda a imagem do fundo de forma dinâmica
    if (location.pathname.startsWith("/destination")) {
      setBg("bg-red-500"); // Cor para todas as páginas de destination
    } else if (location.pathname.startsWith("/crew")) {
      setBg("bg-green-600"); // Cor para todas as páginas de crew
    } else if (location.pathname.startsWith("/technology")) {
      setBg("bg-yellow-400"); // Cor para todas as páginas de technology
    } else {
      switch (location.pathname) {
        case "/":
          setBg("bg-blue-500"); // Cor para a página inicial
          break;
        default:
          setBg("bg-white"); // Cor padrão para rotas não previstas
      }
    }
  }, [location.pathname]);

  return (
    <div className={`h-full ${bg}`}>
      <Header />
      <div className="h-5/6">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination_moon" element={<Destination_moon />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />

          {/* sistema de navegação das páginas do Destination */}
          <Route path="/destination_mars" element={<Destination_mars />} />
          <Route path="/destination_europa" element={<Destination_europa />} />
          <Route path="/destination_titan" element={<Destination_titan />} />
        </Routes>
      </div>
    </div>
  );
}

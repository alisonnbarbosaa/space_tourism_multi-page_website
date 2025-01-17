import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

import Destination_moon from "./components/pages/destination/Destination_moon";
import Destination_mars from "./components/pages/destination/Destination_mars";
import Destination_europa from "./components/pages/destination/Destination_europa";
import Destination_titan from "./components/pages/destination/Destination_titan";

import Crew_commander from "./components/pages/crew/Crew_commander";
import Crew_engineer from "./components/pages/crew/Crew_engineer";
import Crew_pilot from "./components/pages/crew/Crew_pilot";
import Crew_specialist from "./components/pages/crew/Crew_specialist";

import Technology_vehicle from "./components/pages/technology/Technology_vehicle";
import Technology_spaceport from "./components/pages/technology/Technology_spaceport";
import Technology_capsule from "./components/pages/technology/Technology_capsule";

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
  const [h, setH] = useState("");

  useEffect(() => {
    // verifica qual é a página atual e muda a imagem do fundo de forma dinâmica
    if (location.pathname.startsWith("/destination")) {
      setBg("bg-destination bg-cover bg-center"); // Cor para todas as páginas de destination
      setH("max-sm:h-min h-full");
    } else if (location.pathname.startsWith("/crew")) {
      setBg("bg-crew bg-cover bg-center"); // Cor para todas as páginas de crew
      setH("h-full");
    } else if (location.pathname.startsWith("/technology")) {
      setBg("bg-technology bg-cover bg-center"); // Cor para todas as páginas de technology
    } else {
      switch (location.pathname) {
        case "/":
          setBg("bg-home bg-cover bg-center"); // Cor para a página inicial
          setH("h-full");
          break;
        default:
          setBg("bg-white"); // Cor padrão para rotas não previstas
      }
    }
  }, [location.pathname]);

  return (
    <div className={`${h} ${bg}`}>
      <Header />
      <div className="h-5/6">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination_moon" element={<Destination_moon />} />
          <Route path="/crew_commander" element={<Crew_commander />} />
          <Route path="/technology_vehicle" element={<Technology_vehicle />} />

          {/* sistema de navegação das páginas do Destination */}
          <Route path="/destination_mars" element={<Destination_mars />} />
          <Route path="/destination_europa" element={<Destination_europa />} />
          <Route path="/destination_titan" element={<Destination_titan />} />

          {/* sistema de navegação das páginas do Crew */}
          <Route path="/crew_engineer" element={<Crew_engineer />} />
          <Route path="/crew_pilot" element={<Crew_pilot />} />
          <Route path="/crew_specialist" element={<Crew_specialist />} />

          {/* sistema de navegação das páginas do Technology */}
          <Route
            path="/technology_spaceport"
            element={<Technology_spaceport />}
          />
          <Route path="/technology_capsule" element={<Technology_capsule />} />
        </Routes>
      </div>
    </div>
  );
}

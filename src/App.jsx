import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Destination from "./components/pages/destination/Destination_moon";
import Crew from "./components/pages/crew/Crew_commander";
import Technology from "./components/pages/technology/Technology_vehicle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="h-3/4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;

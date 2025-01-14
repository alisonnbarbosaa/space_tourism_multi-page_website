import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

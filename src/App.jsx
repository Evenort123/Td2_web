import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Accueil from "./Pages/Accueil.jsx";
import Apropos from "./Pages/Apropos.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>MonSite Web</h2>

        <div className="nav-links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/apropos">À propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
  
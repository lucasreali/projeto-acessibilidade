import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Tecnologias from "./pages/Tecnologias";
import Beneficios from "./pages/Beneficios";
import Desafios from "./pages/Desafios";
import Praticas from "./pages/Praticas";
import Inicio from "./pages/Inicio";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
          <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/tecnologias" element={<Tecnologias />} />
                <Route path="/desafios" element={<Desafios />} />
                <Route path="/praticas" element={<Praticas />} />
            </Routes>
        </Router>
    );
}

export default App;

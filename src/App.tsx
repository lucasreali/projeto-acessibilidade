import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Tecnologias from "./pages/Tecnologias";
import Home from "./pages/Home";
import Beneficios from "./pages/Beneficios";
import Desafios from "./pages/Desafios";
import Praticas from "./pages/Praticas";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/tecnologias" element={<Tecnologias />} />
                <Route path="/desafios" element={<Desafios />} />
                <Route path="/praticas" element={<Praticas />} />
            </Routes>
        </Router>
    );
}

export default App;

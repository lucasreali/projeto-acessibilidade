import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";

const NavBar = () => {
    const location = useLocation();
    const [isHighContrast, setIsHighContrast] = useState(false);

    const getLinkClass = (path: string) =>
        location.pathname === path ? "active" : "";

    const toggleContrast = () => {
        const newState = !isHighContrast;
        setIsHighContrast(newState);
        document.body.classList.toggle("high-contrast", newState);
        localStorage.setItem("highContrast", JSON.stringify(newState));
    };
    
    useEffect(() => {
        const savedContrast = JSON.parse(localStorage.getItem("highContrast") || "false");
        setIsHighContrast(savedContrast);
        if (savedContrast) {
            document.body.classList.add("high-contrast");
        }
    }, []);

    return (
        <header>
            <nav className="container">
                <Link to="/">
                    <img
                        src={
                            isHighContrast
                                ? "./contrast/logo.svg"
                                : "./normal/logo.svg"
                        }
                        alt="Icone da pagina"
                    />
                </Link>
                <ul>
                    <li>
                        <Link className={getLinkClass("/")} to="/">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={getLinkClass("/beneficios")}
                            to="/beneficios"
                        >
                            Benefícios
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={getLinkClass("/tecnologias")}
                            to="/tecnologias"
                        >
                            Tecnologias
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={getLinkClass("/desafios")}
                            to="/desafios"
                        >
                            Desafios
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={getLinkClass("/praticas")}
                            to="/praticas"
                        >
                            Práticas
                        </Link>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleContrast} aria-pressed={isHighContrast}>
                <img
                    src={
                        isHighContrast
                            ? "./contrast/contraste-ico.svg"
                            : "./normal/contraste-ico.svg"
                    }
                    alt={
                        isHighContrast
                            ? "Desativar alto contraste"
                            : "Ativar alto contraste"
                    }
                />
            </button>
        </header>
    );
};

export default NavBar;

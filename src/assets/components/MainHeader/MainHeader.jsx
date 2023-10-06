import { NavLink } from "react-router-dom";
import "./MainHeader.css";
function MainHeader() {
    return (
        <>
            <header className="Links-container">
                <div>
                    <NavLink to="#abt-me" className="navlink">
                        Sobre mí
                    </NavLink>
                    <NavLink to="#projects" className="navlink">
                        Proyectos
                    </NavLink>
                    <NavLink to="#certifications" className="navlink">
                        Certificaciones
                    </NavLink>
                    <NavLink to="#contact" className="navlink">
                        Contacto
                    </NavLink>
                </div>
            </header>
        </>
    );
}

export default MainHeader;

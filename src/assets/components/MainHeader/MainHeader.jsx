import "./MainHeader.css";
function MainHeader() {
    return (
        <header className="Links-container">
            <ul>
                <li>
                    <a className="navlink" href="#abtme">
                        Sobre mí
                    </a>
                </li>
                <li>
                    <a className="navlink" href="#projects">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a className="navlink" href="#certifications">
                        Certificaciones
                    </a>
                </li>
                <li>
                    <a className="navlink" href="#contact">
                        Contacto
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader;

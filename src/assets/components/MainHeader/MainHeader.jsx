import "./MainHeader.css";
function MainHeader() {
    return (
        <header className="Links-container">
            <ul className="wrapper">
                <li className="icon">
                    <span className="tooltip" id="abt-me">
                        IvánFalcón
                    </span>
                    <a className="navlink" href="#abtme">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                    </a>
                </li>
                <li className="icon">
                    <span className="tooltip">Proyectos</span>
                    <a className="navlink" href="#projects">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-briefcase"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                            <path d="M12 12l0 .01"></path>
                            <path d="M3 13a20 20 0 0 0 18 0"></path>
                        </svg>
                    </a>
                </li>
                <li className="icon">
                    <span className="tooltip">Certificaciones</span>
                    <a className="navlink" href="#certifications">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-certificate"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                            <path d="M6 9l12 0"></path>
                            <path d="M6 12l3 0"></path>
                            <path d="M6 15l2 0"></path>
                        </svg>
                    </a>
                </li>
                <li className="icon">
                    <span className="tooltip">Contacto</span>
                    <a className="navlink" href="#contact">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-mail"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                            <path d="M3 7l9 6l9 -6"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader;

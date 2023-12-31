import './Certifications.css'
function Certifications() {
    function Move(offset) {
        const slides = document.querySelector('[data-carousel]').querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }
    setInterval(function () {
        Move(1)
    }, 8000)
    return (
        <>
            <div className="Certifications" id="certifications">
                <div data-carousel>
                    <button
                        data-carousel-button="prev"
                        className="carousel-buttons"
                        id="Left-button-carousel"
                        onClick={() => Move(-1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg>
                    </button>

                    <button
                        className="carousel-buttons"
                        id="Right-button-carousel"
                        onClick={() => Move(1)}
                        data-carousel-button="next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                    </button>

                    <ul className="Certifications-card" data-slides id="data-slides">
                        <li className="card-item" data-active>
                            <img src="/certifications/Ivan_Falcon_HTML_CSS.png" alt="Certificacion HTML y CSS" />
                        </li>
                        <li className="card-item">
                            <img src="/certifications/Ivan_Falcon_JS_Cilsa.png" alt="Certificacion JavaScript" />
                        </li>
                        <li className="card-item">
                            <img src="/certifications/Ivan_Falcon_Python.png" alt="Certificacion Empujar+UTN" />
                        </li>
                        <li className="card-item">
                            <img src="/certifications/Empujar+UTN.PNG" alt="Certificacion Python" />
                        </li>
                        <li className="card-item">
                            <img src="/certifications/Mejor-asistencia.PNG" alt="Mejor asistencia" />
                        </li>
                        <li className="card-item">
                            <a href="https://www.efset.org/cert/qUfxms" target="_blank" rel="noreferrer">
                                <img src="/certifications/EF-set-Certificate.png" alt="Certificacion EF set" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Certifications

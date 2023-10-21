import "./MainCard.css";
import Atropos from "atropos/react";

function MainCard() {
    function Rotar(x, y) {
        let ex1Layer = document.getElementById("ex1-layer");
        window.requestAnimationFrame(function () {
            ex1Layer.style.transition = "transform 0.1s";
            ex1Layer.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
        });
    }
    return (
        <>
            <div>
                <Atropos shadowScale={1.05} onRotate={(x, y) => Rotar(x, y)} className="MyAtropos" id="ex1-layer">
                    <div className="Abtme-Card" data-atropos-offset="5" data-atropos-opacity="0.9;1.5">
                        <h1 data-atropos-offset="3">IVÁN FALCÓN</h1>
                        <h2 data-atropos-offset="3">DESARROLLADOR FULLSTACK</h2>
                        <section data-atropos-offset="1" className="Card-Abtme-text">
                            <p>
                                Me gusta aprender y entender cosas que no comprendo, y mi principal motivación es que si
                                alguien más puede hacerlo, yo también.
                            </p>
                            <p>Cuando apunto a algo, apunto a ser el mejor.</p>
                            <p>Me considero una persona disciplinada, pero estoy constantemente trabajando en ello.</p>
                        </section>
                    </div>
                </Atropos>
            </div>
        </>
    );
}
export default MainCard;

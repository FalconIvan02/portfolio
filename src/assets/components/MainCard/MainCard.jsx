import "./MainCard.css";
import background from "../../images/Lake.jpg";

import Atropos from "atropos/react";

function MainCard() {
    return (
        <>
            <div>
                <Atropos className="MyAtropos">
                    <div className="Abtme-Card" data-atropos-offset="-5">
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

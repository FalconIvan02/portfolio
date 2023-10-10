import "./MainCard.css";
import background from "../../images/Lake.jpg";

import Atropos from "atropos/react";

function MainCard() {
    return (
        <>
            <div>
                <Atropos className="MyAtropos">
                    <div className="Abtme-Card" data-atropos-offset="-1">
                        <h1 data-atropos-offset="10">Iván Falcón</h1>
                        <h2 data-atropos-offset="10">Desarrollador Fullstack</h2>
                        <p data-atropos-offset="5">
                            Me gusta aprender y entender cosas que no sé o que no comprendo, y mi principal motivación
                            es que si alguien más puede hacerlo, yo también. Cuando apunto a algo, apunto a ser el
                            mejor. Me considero una persona disciplinada, pero es algo en lo que estoy trabajando
                            constantemente.
                        </p>
                    </div>
                </Atropos>{" "}
            </div>
        </>
    );
}
export default MainCard;

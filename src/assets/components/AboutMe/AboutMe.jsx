import background from "../../images/Lake.jpg";
import trees from "../../images/Trees-minimalist.png";
import sun from "../../images/sun.png";
import Atropos from "atropos/react";
import AboutmeBackground from "../../images/mobile/abt-me-bg.jpg";

import MainCard from "../MainCard/MainCard.jsx";

function AboutMe() {
    return (
        <main className="container">
            <MainCard />
            {/*             <Atropos
                className="my-atropos"
                activeOffset={40}
                shadowScale={10.05}
                onEnter={() => console.log("Enter")}
                onLeave={() => console.log("Leave")}
                onRotate={(x, y) => console.log("Rotate", x, y)}
            >
                <img src={background} data-atropos-offset="0.2" className="fondo" />
                <img src={sun} data-atropos-offset="-0.4" className="sun" />
                <img src={trees} data-atropos-offset="0.4" className="trees" />
            </Atropos> */}
        </main>
    );
}
export default AboutMe;

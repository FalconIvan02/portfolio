import "./Project-card.css";
import Atropos from "atropos/react";

function ProjectCard() {
    return (
        <div className="cards">
            <div className="card red" data-atropos-offset="3">
                <a className="tip" href="https://itsfood.netlify.app" target="_blank"></a>
            </div>
            <div className="card blue">
                <p className="tip">Hover Me</p>
                <p className="second-text">Lorem Ipsum</p>
            </div>
            <div className="card green">
                <p className="tip">Hover Me</p>
                <p className="second-text">Lorem Ipsum</p>
            </div>
        </div>
    );
}
export default ProjectCard;

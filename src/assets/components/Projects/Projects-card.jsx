import "./Project-card.css";

function ProjectCard() {
    return (
        <div className="cards">
            <div className="card red">
                <a className="tip" href="https://itsfood.netlify.app" target="_blank">
                    <p>It's Food</p>
                </a>
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

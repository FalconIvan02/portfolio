import "./Project-card.css";
function ProjectCard() {
    return (
        <div className="cards">
            <div className="card red">
                <p className="tip">IT's food</p>
                <a className="tip" href="https://itsfood.netlify.app" target="_blank"></a>
            </div>
            <div className="card blue">
                <p className="tip">To do list</p>
                <a href="https://falconivanto-do.netlify.app" target="_blank" rel="noopener noreferrer"></a>
            </div>
            {/*            <div className="card green">
                <p className="tip">Hover Me</p>
                <p className="second-text">Lorem Ipsum</p>
            </div> */}
        </div>
    );
}
export default ProjectCard;

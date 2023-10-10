import MainHeader from "./MainHeader/MainHeader.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Projects from "./Projects/Projects.jsx";
import Certifications from "./Certifications/Certifications.jsx";
import Contact from "./Contact/contact.jsx";
function Home() {
    return (
        <>
            <MainHeader />
            <AboutMe />
            <Projects />
            <Certifications />
            <Contact />
        </>
    );
}
export default Home;

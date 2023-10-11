import "./Carousel.css";
import Leftarrow from "../../icons/Left-arrow-icon.svg";
import Rightarrow from "../../icons/Right-arrow-icon.svg";

function Carousel() {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
    return (
        <section aria-label="Newest Photos">
            <div className="carousel" data-carousel>
                <button data-carousel-button="prev" className="carousel-button prev" id="left">
                    &larr;
                </button>

                <button data-carousel-button="next" className="carousel-button next" id="right">
                    &rarr;
                </button>
                <ul data-slides>
                    <li className="slide" data-active>
                        <img src="./src/assets/images/mobile/food.png" alt="Its food project"></img>
                    </li>
                    <li className="slide">
                        <img src="" alt="Nature Image #2"></img>
                    </li>
                    <li className="slide">
                        <img src="" alt="Nature Image #3"></img>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Carousel;

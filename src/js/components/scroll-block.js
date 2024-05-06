import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollBlock = () => {

  if(window.innerWidth > 992) {
    const items = document.querySelectorAll(".start-info__item");
    const images = document.querySelectorAll(".start-image");
    const imagesParent = document.querySelector(".start-images");
    const imageHeight = images?.[0]?.clientHeight;

    if(items && images && imagesParent) {
      ScrollTrigger.create({
        trigger: ".start",
        start: "top 10%",
        end: "bottom 90%",
        // markers: true,
        onToggle: (self) => {
          console.log(self)
          if (!self?.isActive && self?.direction === -1) {
            items.forEach((item) => {
              item.classList.remove("active");
            });

            images.forEach((image) => {
              image.classList.remove("active");
            });
          }
        },
        onUpdate: (self) => {
          const progress = +(self.progress * 100)?.toFixed(0);
          if (progress > 0) {
            items[0].classList.add("active");
            images[0].classList.add("active");

            if (self?.direction === -1) {
              items[1].classList.remove("active");
              images[1].classList.remove("active");

              imagesParent.style.transform = "translateY(0px)";
            }
          }

          if (progress >= 25) {
            items[1].classList.add("active");
            images[0].classList.remove("active");
            images[1].classList.add("active");

            imagesParent.style.transform = `translateY(-${imageHeight / 2}px)`;

            if (self?.direction === -1) {
              items[2].classList.remove("active");
              images[2].classList.remove("active");
            }
          }

          if (progress >= 50) {
            items[2].classList.add("active");

            images[1].classList.remove("active");
            images[2].classList.add("active");

            imagesParent.style.transform = `translateY(-${imageHeight}px)`;

            if (self?.direction === -1) {
              items[3].classList.remove("active");
              images[3].classList.remove("active");
            }
          }

          if (progress >= 75) {
            items[3].classList.add("active");

            images[2].classList.remove("active");
            images[3].classList.add("active");

            imagesParent.style.transform = `translateY(-${imageHeight * 1.5}px)`;
          }
        },
      });
    }
  }
};

import React, { useRef, useState, useEffect } from "react";
import "./style.css"; // Import the stylesheet
import { ArrowRight, ArrowLeft } from "react-feather";

interface DraggableCardSliderProps {
  children: React.ReactNode;
}

const DraggableCardSlider: React.FC<DraggableCardSliderProps> = ({
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const firstCardRef = useRef<HTMLLIElement | null>(null);
  const arrowBtnsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  let timeoutId: number | undefined;

  useEffect(() => {
    const firstCardWidth = firstCardRef.current?.offsetWidth || 0;
    const arrowBtns = arrowBtnsRef.current;

    // Function to handle drag start
    const dragStart = (e: MouseEvent) => {
      setIsDragging(true);
      carouselRef.current?.classList.add("dragging");
      setStartX(e.pageX);
      setStartScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    // Function to handle dragging
    const dragging = (e: MouseEvent) => {
      if (!isDragging) return;
      const newScrollLeft = startScrollLeft - (e.pageX - startX);
      if (carouselRef.current) carouselRef.current.scrollLeft = newScrollLeft;
    };

    // Function to handle drag stop
    const dragStop = () => {
      setIsDragging(false);
      carouselRef.current?.classList.remove("dragging");
    };

    // Function to handle infinite scrolling
    const infiniteScroll = () => {
      const scrollLeft = carouselRef.current?.scrollLeft || 0;
      const scrollWidth = carouselRef.current?.scrollWidth || 0;
      const offsetWidth = carouselRef.current?.offsetWidth || 0;

      if (scrollLeft === 0) {
        carouselRef.current?.classList.add("no-transition");
        if (carouselRef.current)
          carouselRef.current.scrollLeft = scrollWidth - 2 * offsetWidth;
        carouselRef.current?.classList.remove("no-transition");
      } else if (Math.ceil(scrollLeft) === scrollWidth - offsetWidth) {
        carouselRef.current?.classList.add("no-transition");
        if (carouselRef.current) carouselRef.current.scrollLeft = offsetWidth;
        carouselRef.current?.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!wrapperRef.current?.matches(":hover")) autoPlay();
    };

    // Function to autoplay
    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = window.setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += firstCardWidth;
        }
      }, 2500);
    };

    // Initialize
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCard = firstCardRef.current;

    if (carousel && firstCard) {
      const cardPerView = Math.round(
        carousel.offsetWidth / firstCard.offsetWidth
      );

      // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
      [...carousel.children]
        .slice(-cardPerView)
        .reverse()
        .forEach((card) => {
          carousel.insertAdjacentElement(
            "afterbegin",
            card.cloneNode(true) as HTMLElement
          );
        });

      // Insert copies of the first few cards to the end of the carousel for infinite scrolling
      [...carousel.children].slice(0, cardPerView).forEach((card) => {
        carousel.insertAdjacentElement(
          "beforeend",
          card.cloneNode(true) as HTMLElement
        );
      });

      // Scroll the carousel to hide the duplicated cards
      carousel.classList.add("no-transition");
      carousel.scrollLeft = firstCard.offsetWidth;
      carousel.classList.remove("no-transition");
    }

    if (wrapper && arrowBtns) {
      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft +=
              btn.id === "left" ? -firstCardWidth : firstCardWidth;
          }
        });
      });
    }

    if (carousel && firstCard) {
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("scroll", infiniteScroll);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.addEventListener("mouseleave", autoPlay);
      autoPlay();
    }

    return () => {
      // Clean up event listeners
      if (carousel) {
        carousel.removeEventListener("mousedown", dragStart);
        carousel.removeEventListener("mousemove", dragging);
        document.removeEventListener("mouseup", dragStop);
        carousel.removeEventListener("scroll", infiniteScroll);
      }
      if (wrapper) {
        wrapper.removeEventListener("mouseenter", () =>
          clearTimeout(timeoutId)
        );
        wrapper.removeEventListener("mouseleave", autoPlay);
      }
      clearTimeout(timeoutId);
    };
  }, [isDragging, isAutoPlay]);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div id="left" className="right-icon">
        <ArrowLeft />
      </div>
      <div className="carousel" ref={carouselRef}>
        {React.Children.map(children, (child, index) => (
          <div key={index} ref={index === 0 ? firstCardRef : null}>
            {child}
          </div>
        ))}
      </div>
      <div id="right" className="right-icon">
        <ArrowRight />
      </div>
    </div>
  );
};

export default DraggableCardSlider;

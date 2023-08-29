import React, { useRef, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselItems = styled.div`
  display: flex;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
`;

const LeftCarouselButton = styled(CarouselButton)`
  left: 0;
`;

const RightCarouselButton = styled(CarouselButton)`
  right: 0;
`;

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <CarouselContainer
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showArrows && (
        <>
          <LeftCarouselButton onClick={() => handleScroll(-200)}>
            &lt;
          </LeftCarouselButton>
          <RightCarouselButton onClick={() => handleScroll(200)}>
            &gt;
          </RightCarouselButton>
        </>
      )}
      <CarouselItems>{children}</CarouselItems>
    </CarouselContainer>
  );
}

export default Carousel;

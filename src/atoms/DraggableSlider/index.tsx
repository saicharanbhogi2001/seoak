// @ts-ignore
import Slider from "react-draggable-slider";

interface SliderProps {
  sliderSettings: React.ReactNode;
}
export const ReactSlider: React.FC<SliderProps> = ({ sliderSettings }) => {
  return <Slider sliderSettings={sliderSettings} />;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image100 from "../../../../assets/img/100x100.png";
import artifiacalImage from "../../../../assets/img/artificialintelligence.png";
import { CoruselComponent } from "./style";
import { Link } from "react-router-dom";
// import { ArrowLeft, ArrowRight } from "react-feather";

function CoursesCarousel() {
  const settings = {
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  // Custom NextArrow component
  // function NextArrow(props: any) {
  //   const { onClick } = props;
  //   return (
  //     <div className="custom-arrow next-arrow" onClick={onClick}>
  //       <ArrowRight />
  //     </div>
  //   );
  // }

  // Custom PrevArrow component
  // function PrevArrow(props: any) {
  //   const { onClick } = props;
  //   return (
  //     <div className="custom-arrow prev-arrow" onClick={onClick}>
  //       <ArrowLeft />
  //     </div>
  //   );
  // }

  return (
    <CoruselComponent>
      <div className="col-md-12">
        <Slider {...settings}>
          <div className="item">
            <div className="thumb">
              <Link to="#">
                <img src={artifiacalImage} alt="Thumb" />
              </Link>
              <div className="price">
                <b>Price: 10,000₹</b>
              </div>
            </div>
            <div className="info">
              <div className="author-info">
                <div className="thumb">
                  <Link to="#">
                    <img src={Image100} alt="Thumb" />
                  </Link>
                </div>
                <div className="others">
                  <Link to="#">Munil Druva</Link>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5 (23,890)</span>
                  </div>
                </div>
              </div>
              <h4>
                <Link to="#">Artificial Intelligence</Link>
              </h4>
              <p>
                Would day nor ask walls known. But preserved advantage are but
                and certainty earnestly enjoyment.
              </p>
              <div className="bottom-info">
                <ul>
                  <li>
                    <i className="fas fa-user"></i> 170
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> 72:00hrs
                  </li>
                </ul>
                <Link to="/live-advanced-ai">Know Now</Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <Link to="#">
                <img src={artifiacalImage} alt="Thumb" />
              </Link>
              <div className="price">
                <b>Price: 10,000₹</b>
              </div>
            </div>
            <div className="info">
              <div className="author-info">
                <div className="thumb">
                  <Link to="#">
                    <img src={Image100} alt="Thumb" />
                  </Link>
                </div>
                <div className="others">
                  <Link to="#">Munil Druva</Link>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5 (23,890)</span>
                  </div>
                </div>
              </div>
              <h4>
                <Link to="#">Artificial Intelligence</Link>
              </h4>
              <p>
                Would day nor ask walls known. But preserved advantage are but
                and certainty earnestly enjoyment.
              </p>
              <div className="bottom-info">
                <ul>
                  <li>
                    <i className="fas fa-user"></i> 170
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> 72:00hrs
                  </li>
                </ul>
                <Link to="/live-advanced-ai">Know Now</Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <Link to="#">
                <img src={artifiacalImage} alt="Thumb" />
              </Link>
              <div className="price">
                <b>Price: 10,000₹</b>
              </div>
            </div>
            <div className="info">
              <div className="author-info">
                <div className="thumb">
                  <Link to="#">
                    <img src={Image100} alt="Thumb" />
                  </Link>
                </div>
                <div className="others">
                  <Link to="#">Munil Druva</Link>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5 (23,890)</span>
                  </div>
                </div>
              </div>
              <h4>
                <Link to="#">Artificial Intelligence</Link>
              </h4>
              <p>
                Would day nor ask walls known. But preserved advantage are but
                and certainty earnestly enjoyment.
              </p>
              <div className="bottom-info">
                <ul>
                  <li>
                    <i className="fas fa-user"></i> 170
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> 72:00hrs
                  </li>
                </ul>
                <Link to="/live-advanced-ai">Know Now</Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <Link to="#">
                <img src={artifiacalImage} alt="Thumb" />
              </Link>
              <div className="price">
                <b>Price: 10,000₹</b>
              </div>
            </div>
            <div className="info">
              <div className="author-info">
                <div className="thumb">
                  <Link to="#">
                    <img src={Image100} alt="Thumb" />
                  </Link>
                </div>
                <div className="others">
                  <Link to="#">Munil Druva</Link>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5 (23,890)</span>
                  </div>
                </div>
              </div>
              <h4>
                <Link to="#">Artificial Intelligence</Link>
              </h4>
              <p>
                Would day nor ask walls known. But preserved advantage are but
                and certainty earnestly enjoyment.
              </p>
              <div className="bottom-info">
                <ul>
                  <li>
                    <i className="fas fa-user"></i> 170
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> 72:00hrs
                  </li>
                </ul>
                <Link to="/live-advanced-ai">Know Now</Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </CoruselComponent>
  );
}

export default CoursesCarousel;

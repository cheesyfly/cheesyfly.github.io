import './index.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function ProjectsSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      const anouncements = [
        "/assets/images/anouncements/0.png",
        "/assets/images/anouncements/1.png",
        "/assets/images/anouncements/2.png",
      ]

      return (
        <div id="project-slider-page">
            <Slider {...settings}>
                {anouncements.map((url) => (<img src={url}/>))}
            </Slider>
        </div>
      );
}
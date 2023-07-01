import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/img/logos/ANN.AX_BIG.png";
import {
  LOGOANSELL,
  MSASAFETY,
  TRESM,
  HONEYLWELL,
  CLUTE,
  DRAGGER,
  UVEX,
  SHOWA,
  OUTPONT,
  HOWARD,
  LIBUS,
} from "../../constants/images";
import "./index.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Habilita el movimiento automático
    autoplaySpeed: 2000, // Establece la velocidad de desplazamiento automático (en milisegundos)
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="text-center mb-5">Nuestras marcas destacadas</h5>
        </div>
        <div className="col-md-12">
          <div className="slider">
            <Slider {...settings}>
              <div className="logo_container">
                <img src={TRESM} alt="" className="img-fluid logos_carousel " />
              </div>
              <div className="logo_container">
                <img
                  src={MSASAFETY}
                  alt=""
                  className="img-fluid logos_carousel"
                />
              </div>
              <div className="logo_container">
                <img
                  src={LOGOANSELL}
                  alt=""
                  className="img-fluid logos_carousel"
                />
              </div>
              <div className="logo_container">
                <img
                  src={HONEYLWELL}
                  alt=""
                  className="img-fluid logos_carousel"
                />
              </div>
              <div className="logo_container">
                <img src={CLUTE} alt="" className="img-fluid logos_carousel" />
              </div>
              <div className="logo_container">
                <img
                  src={DRAGGER}
                  alt=""
                  className="img-fluid logos_carousel"
                />
              </div>
              <div className="logo_container">
                <img src={UVEX} alt="" className="img-fluid logos_carousel" />
              </div>
              <div className="logo_container">
                <img src={SHOWA} alt="" className="img-fluid logos_carousel" />
              </div>
              <div className="logo_container">
                <img
                  src={OUTPONT}
                  alt=""
                  className="img-fluid logos_carousel"
                />
              </div>
              <div className="logo_container">
                <img src={HOWARD} alt="" className="img-fluid logos_carousel" />
              </div>
              <div className="logo_container">
                <img src={LIBUS} alt="" className="img-fluid logos_carousel" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

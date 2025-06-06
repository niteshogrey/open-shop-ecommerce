import { Link } from "react-router-dom";
import smart_deals from "../../assets/smart-deals.webp";
import smart_deals_2 from "../../assets/smart-deals-2.jpg";
import fashion_deals from "../../assets/fashion-deals.webp";
import iphone_deals from "../../assets/iphone-deals.webp";
import cold_drinks_deals from "../../assets/cold-drinks-deals.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  { image: smart_deals, name: "smart-deals" },
  { image: fashion_deals, name: "fashion-deals" },
  { image: iphone_deals, name: "iphone-deals" },
  { image: cold_drinks_deals, name: "cold-drinks-deals" },
  { image: smart_deals_2, name: "smart-deals-2" },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#7F00FF", borderRadius:"10px",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#7F00FF", borderRadius:"10px" }}
      onClick={onClick}
    />
  );
}

const BannerBox = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Link key={index} to="/" className="px-2">
            <img
              src={banner.image}
              alt={banner.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BannerBox;

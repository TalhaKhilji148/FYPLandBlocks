import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./hero.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gsap } from "gsap";

const Hero = () => {
  const [type, setType] = useState("rental");
  const [city, setCity] = useState("0");
  const [priceRange, setPriceRange] = useState("0");
  const navigate = useNavigate();
  const carouselImages = [
    "https://wallpaperaccess.com/full/1899348.jpg",
    "https://wallpapercave.com/wp/wp2337046.jpg",
    "https://www.ibm.com/blog/wp-content/uploads/2020/04/Retina-Display-646399094.jpg",
  ];


  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&city=${city}&priceRange=${priceRange}`);
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel
          dynamicHeight={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={3000}
          swipeable={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          stopOnHover={true}
          centerMode={false}
          centerSlidePercentage={100}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-image">
              <img
                src={image}
                className="w-full h-[900px] carousel-image"
                alt={`Carousel Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2>Let's find your dream place with LandBlocks</h2>
          <h5>Search the best selection of luxury real estate</h5>
          <div className={classes.options}>
            <select onChange={(e) => setType(e.target.value)}>
              <option disabled>Select type</option>
              <option value="rental">Rental</option>
              <option value="tokenized">Tokenized</option>
              <option value="full">Full</option>
            </select>
            <select onChange={(e) => setPriceRange(e.target.value)}>
              <option disabled>Select Price Range</option>
              <option value="0">0-10</option>
              <option value="1">10-20</option>
              <option value="2">20-30</option>
              <option value="3">30-40</option>
              <option value="4">40-50</option>
            </select>
            <select onChange={(e) => setCity(e.target.value)}>
              <option disabled>Select City</option>
              <option value="0">Islamabad</option>
              <option value="1">Lahore</option>
              <option value="2">Karachi</option>
              <option value="3">Sahiwal</option>
              <option value="4">Arifwala</option>
              <option value="5">Multan</option>
            </select>
            <AiOutlineSearch
              className={classes.searchIcon}
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

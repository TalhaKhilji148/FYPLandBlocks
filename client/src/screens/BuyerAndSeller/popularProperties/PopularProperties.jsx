import React from "react";
import { Link } from "react-router-dom";
import classes from "./popularProperties.module.css";
import img1 from "../../../assets/realestatebeach.jpg";
import img2 from "../../../assets/realestatemountain.jpg";
import img3 from "../../../assets/realestatecountryside.jpg";

const PopularProperties = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>For every user Requirement</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link
            to={`/properties?type=rental&city=0&priceRange=0`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/house-rent-abstract-concept-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent_335657-1123.jpg?w=2000"
              }
            />
            <div className={classes.quantity}>14 properties</div>
            <h5>Rental properties</h5>
          </Link>
          <Link
            to={`/properties?type=tokenized&city=0&priceRange=0`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/finances-flat-airdrop-illustration_23-2149397964.jpg?w=2000"
              }
            />
            <div className={classes.quantity}>5 properties</div>
            <h5>Tokenized properties</h5>
          </Link>
          <Link
            to={`/properties?type=full&city=2&priceRange=0`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/real-estate-abstract-concept-vector-illustration-real-estate-agency-residential-industrial-commercial-property-market-investment-portfolio-home-ownership-property-value-abstract-metaphor_335657-1967.jpg?w=2000"
              }
            />
            <div className={classes.quantity}>7 properties</div>
            <h5>Full properties</h5>
          </Link>
        </div>
      </div>
      {/* <img
        className="w-full mt-10 mb-40"
        src="https://bafybeihpelr3yokhl7bldlz6s22gf3mkrkq3mmccff5xczyvy53m2b3qra.ipfs.dweb.link/"
        alt="Sample Image"
      /> */}
    </div>
  );
};

export default PopularProperties;

import React, { useState } from "react";
import classes from "./predictprices.module.css";
import { Link } from "react-router-dom";

export default function PredictPrices() {
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);

  //   // Open the HTML file in the current tab
  //   window.location.href = `http://127.0.0.1:5500/client/${option}/${option.toLowerCase()}.html`;
  // };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>For Machine Learning Prediction</h5>
          <h2>Choose type of property</h2>
        </div>
        <div className={classes.properties}>
          <Link
            to={`http://127.0.0.1:5500/client/rent/rent.html`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/house-rent-abstract-concept-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent_335657-1123.jpg?w=2000"
              }
            />
            {/* <div className={classes.quantity}>14 properties</div> */}
            <h5>Rental properties</h5>
          </Link>

          <Link
            to={`http://127.0.0.1:5500/client/home/home.html`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/real-estate-abstract-concept-vector-illustration-real-estate-agency-residential-industrial-commercial-property-market-investment-portfolio-home-ownership-property-value-abstract-metaphor_335657-1967.jpg?w=2000"
              }
            />
            {/* <div className={classes.quantity}>7 properties</div> */}
            <h5>Full properties</h5>
          </Link>
          <Link
            to={`http://127.0.0.1:5500/client/flat/flat.html`}
            className={classes.property}
          >
            <img
              src={
                "https://img.freepik.com/free-vector/finances-flat-airdrop-illustration_23-2149397964.jpg?w=2000"
              }
            />
            {/* <div className={classes.quantity}>5 properties</div> */}
            <h5>Tokenized properties</h5>
          </Link>
        </div>
      </div>
      {/* <img
        className="w-full mt-10 mb-40"
        src="https://bafybeihpelr3yokhl7bldlz6s22gf3mkrkq3mmccff5xczyvy53m2b3qra.ipfs.dweb.link/"
        alt="Sample Image"
      /> */}
      {/* <div className="text-center mt-8 mb-20">
        <h2 className="text-2xl font-bold mb-4">Select an Option</h2>

        <div className="flex space-x-4 justify-center">
          <button
            className={`px-4 py-2 rounded transition ${
              selectedOption === "Flat"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } hover:bg-blue-700 hover:text-white`}
            onClick={() => handleOptionClick("Flat")}
          >
            Flats
          </button>

          <button
            className={`px-4 py-2 rounded transition ${
              selectedOption === "Home"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } hover:bg-blue-700 hover:text-white`}
            onClick={() => handleOptionClick("Home")}
          >
            Home
          </button>

          <button
            className={`px-4 py-2 rounded transition ${
              selectedOption === "Rent"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } hover:bg-blue-700 hover:text-white`}
            onClick={() => handleOptionClick("Rent")}
          >
            Rent
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}

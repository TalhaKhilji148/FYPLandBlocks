import React,{useState} from "react";
import { FaBed, FaSquareFull } from "react-icons/fa";
import logo from "../../../assets/logo192.png";

import person from "../../../assets/person.jpg";
import img1 from "../../../assets/estate.jpg";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
// import { useState } from "react";
import { properties } from "../../../util/dummyData";
import { arrPriceRanges } from "../../../util/idxToPriceRange";
import classes from "./properties.module.css";
import { useEffect } from "react";
import { cityToIdx } from "../../../util/idxToCity";
import { request } from "../../../util/fetchAPI";

const Properties = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [state, setState] = useState(null);
  const query = useLocation().search.slice(1); // slice(1) to remove "?"
  const arrQuery = query.split("&");
  const navigate = useNavigate();

  // fetch all properties
  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request(`/property/getAll`, "GET");
      setAllProperties(data);
    };
    fetchAllProperties();
  }, []);

  // parsing query params
  useEffect(() => {
    if (arrQuery && allProperties?.length > 0 && state === null) {
      let formattedQuery = {};
      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0];
        const value = option.split("=")[1];

        formattedQuery = { ...formattedQuery, [key]: value };

        // if we are on the last index, assign the formattedQuery obj to state
        if (idx === arrQuery.length - 1) {
          setState((prev) => formattedQuery);
          handleSearch(formattedQuery);
        }
      });
    }
  }, [allProperties, arrQuery]);

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSearch = (param = state) => {
    let options;
    // we either pass the formattedObj or event, that's why we do the IF/ELSE
    if (param?.nativeEvent) {
      options = state;
    } else {
      options = param;
    }

    const filteredProperties = allProperties.filter((property) => {
      // console.log(property);
      const priceRange = arrPriceRanges[options.priceRange];
      // console.log("Price: ", priceRange);
      const minPrice = Number(priceRange.split("-")[0]);
      // console.log("Min_Price: ", minPrice);

      const maxPrice = Number(priceRange.split("-")[1]);
      // console.log("Max_Price: ", maxPrice);

      const city = cityToIdx(property.city);

      if (
        property.type === options.type &&
        city === Number(options.city) &&
        property.price >= minPrice &&
        property.price <= maxPrice
      ) {
        return property;
      }
    });

    const queryStr = `type=${options.type}&city=${options.city}&priceRange=${options.priceRange}`;

    navigate(`/properties?${queryStr}`, { replace: true });
    setFilteredProperties((prev) => filteredProperties);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.options}>
          <select value={state?.type} name="type" onChange={handleState}>
            <option disabled>Select type</option>
            <option value="rental">Rental</option>
            <option value="tokenized">Tokenized</option>
            <option value="full">Full</option>
          </select>
          <select
            value={state?.priceRange}
            name="priceRange"
            onChange={handleState}
          >
            <option disabled>Select Price Range</option>
            <option value="0">0-10</option>
            <option value="1">10-20</option>
            <option value="2">20-30</option>
            <option value="3">30-40</option>
            <option value="4">40-50</option>
          </select>
          <select value={state?.city} name="city" onChange={handleState}>
            <option disabled>Select City</option>
            <option value="0">Islamabad</option>
            <option value="1">Lahore</option>
            <option value="2">Karachi</option>
            <option value="3">Sahiwal</option>
            <option value="4">Arifwala</option>
            <option value="5">Multan</option>
          </select>
          <button className={classes.searchBtn}>
            <AiOutlineSearch
              className={classes.searchIcon}
              onClick={handleSearch}
            />
          </button>
        </div>
        {filteredProperties?.length > 0 ? (
          <>
            <div className={classes.titles}>
              <h5>Selected properties</h5>
              <h2>Property you may like</h2>
            </div>
            <div className={classes.properties}>
              {filteredProperties.map((property) => (
                <div key={property._id} className={classes.property}>
                  <Link
                    to={`/propertyDetail/${property._id}`}
                    className={classes.imgContainer}
                  >
                    <img src={property?.img} alt="" />
                  </Link>
                  <div className={classes.details}>
                    <div className={classes.priceAndOwner}>
                      <span className={classes.price}>
                        {property.price.toFixed(8)} eth
                      </span>
                      <img
                        src={property?.currentOwner?.profileImg}
                        className="w-10 h-10 rounded-full ml-32"
                      />
                      {/* <img src={person} className={classes.owner} /> */}
                      {/* Owner: <img src={logo} className={classes.owner} /> */}
                    </div>
                    <div className={classes.moreDetails}>
                      <span>{property.baths}</span>
                      <span>
                        {property.rooms} <FaBed className={classes.icon} />
                      </span>
                      <span>
                        {property.sqmeters} square meters
                        <FaSquareFull className={classes.icon} />
                      </span>
                    </div>
                    <div className={classes.desc}>{property.decs}</div>
                  </div>
                </div>
              ))}
              <div className="w-full px-4 mb-20">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li className="mx-1">
                    <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                      ...
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      12
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 bg-sky-700 hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <h2 className={classes.noProperty}>
            We have no properties with the specified options.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Properties;

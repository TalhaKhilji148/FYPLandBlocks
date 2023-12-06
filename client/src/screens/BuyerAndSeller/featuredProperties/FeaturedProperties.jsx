import React from "react";
import classes from "./featuredProperties.module.css";
import { FaBed, FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../../util/fetchAPI";

import logo from "../../../assets/avatar.png";

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    // console.log("initial");
    const fetchFeatured = async () => {
      try {
        const data = await request("/property/find/featured", "GET");
        setFeaturedProperties(data);
        console.log("ttttttttttttttttttttt ",data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.titles}>
            <h5 >Properties you may like</h5>
            <h2>Our Featured Properties</h2>
          </div>
          <div className={classes.scrollContainer}>
            <div className={classes.featuredProperties}>
              {featuredProperties?.map((property) => (
                <div className={classes.featuredProperty} key={property._id}>
                  <Link
                    to={`/propertyDetail/${property._id}`}
                    className={classes.imgContainer}
                  >
                    <img src={property?.img} alt="" />
                  </Link>
                  <div className={classes.details}>
                    <div className={classes.priceAndOwner}>
                      <span
                        className=" mr-3 font-bold inline-block "
                      >
                        {property?.title}
                      </span>
                      <span className="ml-32   font-bold">
                        {property?.price} eth
                      </span>

                      {/* <img src={logo} className={classes.owner} /> */}
                      <img
                        src={property?.currentOwner?.profileImg}
                        className="w-10 h-10 rounded-full ml-10 mx-10"
                      />
                    </div>
                    <div className={classes.moreDetails}>
                      <span>
                        {property?.baths} <FaBed className={classes.icon} />
                      </span>
                      <span>
                        {property?.rooms} <FaBed className={classes.icon} />
                      </span>
                      <span>
                        {property?.sqmeters} square meters{" "}
                        <FaSquareFull className={classes.icon} />
                      </span>
                    </div>
                    <div className={classes.desc}>{property?.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

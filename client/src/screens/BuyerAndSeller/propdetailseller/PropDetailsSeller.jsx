import React from "react";
import classes from "./propertyDetailsSeller.module.css";
import logo from "../../../assets/logo192.png";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useContext, createContext } from "react";
import { useState } from "react";
import { request } from "../../../util/fetchAPI";
import { FaBed, FaSquareFull } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const PropDetailsSeller = () => {
  const { user } = useSelector((state) => state.auth);
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const priceContext = createContext();

  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const formRef = useRef();

  // // email js TODO ENV VARIABLES
  // const serviceID = process.env.REACT_APP_SERVICE_ID
  // const templateID = process.env.REACT_APP_TEMPLATE_ID

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/property/find/${id}`, "GET");
        setPropertyDetail(data);
        setPrice(data.price);
        console.log("PropertyDetail :", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleCloseForm = () => {
    setShowForm(false);
    setTitle("");
    setDesc("");
  };

  const handleContactOwner = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t06pp54",
        "template_98hv8r4",
        formRef.current,
        "3oTJ216_DibDrfWHo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={propertyDetail?.img} />
        </div>
        <div className={classes.right}>
          <h3 className={classes.title}>
            Title: {`${propertyDetail?.title}`}
            <span className="font-medium text-lg  flex">
              Owner:
              {`${propertyDetail?.currentOwner.username}`}
              {/* <img src={propertyDetail?.img} className={classes.owner} /> */}
              <img
                className="w-24 h-24 mt-[-40px] ml-80   mb-20 rounded-full"
                src={propertyDetail?.currentOwner?.profileImg}
              />
            </span>
          </h3>
          <div className={classes.details}>
            <div className={classes.typeAndContinent}>
              <div>
                Type: <span>{`${propertyDetail?.type}`}</span>
              </div>
              <div>
                City: <span>{`${propertyDetail?.city}`}</span>
              </div>
            </div>
            <div className={classes.priceAndOwner}>
              <span className={classes.price}>
                <span>Price: </span>
                {`${propertyDetail?.price} eth`}
              </span>
            </div>
            <div className={classes.moreDetails}>
              <span>{propertyDetail?.baths}</span>
              <span>
                {propertyDetail?.rooms} <FaBed className={classes.icon} />
              </span>
              <span>
                {propertyDetail?.sqmeters} square meters
                {/* <FaSquareFull className={classes.icon} /> */}
              </span>
            </div>
          </div>
          <div className = "mt-[-20px]">
            {/* Conditionally render the button based on the absence of propertyDetail?.document */}
            {propertyDetail?.tokens && (
              <p className="text-xl font-light ">
                Total Tokens : <span className = "font-bold">{propertyDetail?.tokens}</span>
              </p>
            )}
          </div>
          <p className={classes.desc}>
            Desc: <span>{`${propertyDetail?.desc}`}</span>
          </p>

          <p>
            PropertyDocumentLink :
            {propertyDetail?.document ? (
              <a
                className="text-blue-600 ml-[10%] text-xl font-bold"
                href={propertyDetail?.document}
              >
                Click to view Property document
              </a>
            ) : (
              <span className="ml-10 font-bold text-red-600">
                {" "}
                No document uploaded
              </span>
            )}
          </p>

          <div className="flex-row justify-between ml-[-120px]">
            {/* Conditionally render the button based on the absence of propertyDetail?.document */}
            {!propertyDetail?.document && (
              <Link to={`/ipfs/${id}`}>
                <button className={classes.newBuy}>Add Document</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {showForm && (
        <div className={classes.contactForm} onClick={handleCloseForm}>
          <div
            className={classes.contactFormWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Send Email To Owner</h2>
            <form onSubmit={handleContactOwner} ref={formRef}>
              <input
                value={user?.email}
                type="text"
                placeholder="My email"
                name="from_email"
              />
              <input
                value={user?.username}
                type="text"
                placeholder="My username"
                name="from_username"
              />
              <input
                value={propertyDetail?.currentOwner?.email}
                type="email"
                placeholder="Owner email"
                name="to_email"
              />
              <input
                value={title}
                type="text"
                placeholder="Title"
                name="from_title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                value={desc}
                type="text"
                placeholder="Desc"
                name="message"
                onChange={(e) => setDesc(e.target.value)}
              />
              <button>Send</button>
            </form>
            <AiOutlineClose
              onClick={handleCloseForm}
              className={classes.removeIcon}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropDetailsSeller;

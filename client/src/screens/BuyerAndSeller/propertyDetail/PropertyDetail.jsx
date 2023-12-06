import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import { FaBed, FaSquareFull } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { request } from "../../../util/fetchAPI";
import classes from "./propertyDetail.module.css";

const PropertyDetail = () => {
  const { user } = useSelector((state) => state.auth);
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedTokens, setSelectedTokens] = useState(0);
  const { id } = useParams();
  const formRef = useRef();
  console.log("user>>",user._id)

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     try {
  //       const data = await request(`/property/find/${id}`, "GET");
  //       setPropertyDetail(data);
  //       console.log("PropertyDetail :", data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchDetails();
  // }, [id]);

 useEffect(() => {
   const fetchDetails = async () => {
     try {
       const data = await request(`/property/find/${id}`, "GET");
       setPropertyDetail(data);
       console.log("PropertyDetail :", data);

       // Automatically call the API to deduct tokens and price if the property type is tokenized
       if (data?.type === "tokenized" && data?.reservedTokens > 0) {
         try {
           const options = {
             headers: {
               Authorization:
                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjIxZTk1M2E0YTQzMjZiZjZjYzZhZSIsImlhdCI6MTcwMTg1NzQzOSwiZXhwIjoxNzEwNDk3NDM5fQ.LDS6bd4QNble4rzAVFLRMIFAfwJ2P5-2K8rAUX17mKg",
               "Content-Type": "application/json",
             },
           };

           // Deduct reserved tokens and price simultaneously
           const [deductionResponseTokens, deductionResponsePrice] =
             await Promise.all([
               fetch(
                 `http://localhost:5000/property/deductTokens/${data?._id}`,
                 {
                   method: "PUT",
                   headers: options.headers,
                 }
               ),
               fetch(
                 `http://localhost:5000/property/deductPrice/${data?._id}`,
                 {
                   method: "PUT",
                   headers: options.headers,
                 }
               ),
             ]);

           if (!deductionResponseTokens.ok || !deductionResponsePrice.ok) {
             console.error(
               "Failed to deduct tokens or price:",
               deductionResponseTokens.statusText,
               deductionResponsePrice.statusText
             );
             // Handle error scenario
           } else {
             console.log("Tokens and Price deducted successfully");
           }
         } catch (error) {
           console.error("Error:", error);
           // Handle error scenario
         }
       }
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
    setSelectedTokens(0);
  };

  const handleContactOwner = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t06pp54",
        "template_98hv8r4",
        formRef.current,
        "3oTJ216_DibDrfWHo",
        { tokens: selectedTokens }
      )
      .then(
        (result) => {
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
          <img src={propertyDetail?.img} alt="Property" />
        </div>
        <div className={classes.right}>
          <h3 className={classes.title}>
            Title: {`${propertyDetail?.title}`}
            <span className="font-medium text-lg  flex">
              Owner: {`${propertyDetail?.currentOwner.username}`}
              <img
                className="w-24 h-24 mt-[-40px] ml-80 mb-20 rounded-full"
                src={propertyDetail?.currentOwner?.profileImg}
                alt="Owner"
              />
              {/* <p>{propertyDetail?.currentOwner?._id}</p> */}
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
              <span>{propertyDetail?.sqmeters} square meters</span>
            </div>
          </div>
          {user._id !== propertyDetail?.currentOwner?._id &&
            propertyDetail?.tokens && (
              <div className="mt-[-20px]">
                <label htmlFor="tokenRange" className="text-xl font-light">
                  Tokens:
                </label>
                <input
                  className="ml-5"
                  type="range"
                  id="tokenRange"
                  name="tokensrange"
                  min={0}
                  max={propertyDetail?.tokens}
                  step={1}
                  value={selectedTokens}
                  onChange={(e) => setSelectedTokens(parseInt(e.target.value))}
                />
                <span className="font-bold ml-10">
                  {selectedTokens} out of {propertyDetail?.tokens}
                </span>
                {/* Calculate the price based on selected tokens */}
                <br />
                <span className="font-bold ml-1 mt-12">
                  Calculated Price:{" "}
                  {(
                    selectedTokens *
                    (propertyDetail?.price / propertyDetail?.tokens)
                  ).toFixed(8)}{" "}
                  eth
                </span>
              </div>
            )}
          <p className={classes.desc}>
            Desc: <span>{`${propertyDetail?.desc}`}</span>
          </p>
          <p>
            PropertyDocumentLink :
            {propertyDetail?.document ? (
              <a
                className="text-blue-600 ml-[10%] text-xl font-bold"
                href={propertyDetail?.document}
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="flex-row justify-between">
            {user._id !== propertyDetail?.currentOwner?._id && (
              <>
                <button
                  onClick={() => setShowForm(true)}
                  className={classes.contactOwner}
                >
                  Contact owner
                </button>
                <Link
                  to={`/payment/${
                    propertyDetail?.tokens
                      ? (
                          selectedTokens *
                          (propertyDetail?.price / propertyDetail?.tokens)
                        ).toFixed(7)
                      : propertyDetail?.price
                  }/${propertyDetail?._id}/${user._id}/${selectedTokens}`}
                >
                  <button className={classes.newBuy}>Buy</button>
                </Link>
              </>
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
              <input
                value={selectedTokens}
                type="text"
                placeholder="Total Tokens"
                name="tokens"
                style={{ display: "none" }}
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

export default PropertyDetail;

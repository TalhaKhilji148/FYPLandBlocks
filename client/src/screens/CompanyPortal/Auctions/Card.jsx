import React, { useState, useEffect } from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import Auction from "./Auction";
import instance from "./axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/authSlice";
import { request } from "../../../util/fetchAPI";


function Card() {
 const { user, token } = useSelector((state) => state.auth);
 const dispatch = useDispatch();
 const navigate = useNavigate();  
 const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("initial");
    const fetchAuctions = async () => {
      try {
        console.log("1223 ");
        const data = await request("/blogs/getAuctions", "GET");
        setCards(data);
        console.log("ttttttttttttttttttttt ", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuctions();
  }, []);
  // useEffect(() => {
  //   console.log("innnnnnnn")

  //   const fetchAuctions = async () => {
  //     try {
  //       const response = await request("/card/getAuctions");
  //       setCards(response);
  //       console.log("Response Data>>>>>>>>>>>>>>>>>>>>>>>>>>>>", response);
  //       return response;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   if (!cards.length) {
  //     fetchAuctions();
  //   }
  // }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     Dispatch({
//       type: "LOGOUT",
//     });
//     navigate("/");
//   };
const handleLogout = () => {
  dispatch(logout());
  navigate("/signin");
};

  return (
    <div className="card">
      {/* <div className="navbar">
        <h2 className="application__name">LandBlocks</h2>
        <h2 className="application__title">Auctions</h2>
        <button type="submit" onClick={handleLogout} className="logout__button">
          Logout
        </button>
      </div> */}
      <h1 className="text-black font-bold text-3xl mb-10 text-center">
        Auctions
      </h1>

      <div className="auctions ml-20">
        {cards.map(
          ({
            _id,
            title,
            location,
            image,
            highestBidValue,
            highestBidder,
            seller,
            endTime,
          }) => (
            <Auction
              id={_id}
              title={title}
              location={location}
              image={image}
              highestBidValue={highestBidValue}
              highestBidder={highestBidder}
              seller={seller}
              endTime={endTime}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Card;

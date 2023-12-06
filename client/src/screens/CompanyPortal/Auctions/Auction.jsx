import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Auction({
  id,
  title,
  location,
  image,
  highestBidder,
  highestBidValue,
  seller,
  endTime,
}) {
  const { user, token } = useSelector((state) => state.auth);
  const [bid, setBid] = useState("");
  const [clicked, setClicked] = useState(false);

  const [highestBid, setHighestBid] = useState(0);
  const [winningBidder, setWinningBidder] = useState(highestBidder);
  const [auctionID, setAuctionID] = useState(id);
  const [owner, setOwner] = useState(seller);
  const [serverEndTime, setServerEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setHighestBid(highestBidValue);
    console.log("highest bid Value>>", highestBidValue);
  }, []);

  useEffect(() => {
    const serverEndTimeInMilliseconds = new Date(serverEndTime).getTime();
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const timeLeftInSeconds = Math.max(
        0,
        Math.floor((serverEndTimeInMilliseconds - currentTime) / 1000)
      );
      setTimeLeft(timeLeftInSeconds);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    console.log("111111111111111111111111111111");

    if (bid > highestBid) {
      console.log("222");

      try {
        const response = await fetch(
          "http://localhost:5000/blogs/updateAuction",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              highestBid: bid,
              winningBidder: user?.username,
              auctionID,
            }),
          }
        );

        if (response.ok) {
          console.log("Auction updated successfully");
          setWinningBidder(user?.username);
          setHighestBid(bid);
        } else {
          console.log("Auction could not be updated for some reason");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

      setBid("");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/blogs/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Auction deleted successfully");
        // Add logic to handle the removal of the auction from the UI instantly
      } else {
        console.error("Auction could not be deleted for some reason");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      {timeLeft > 0 && (
        <div
          className="wow fadeInUp relative overflow-hidden rounded-md mb-20 bg-gray-100  shadow-one mr-20"
          data-wow-delay=".1s"
        >
          <Link to={`/auction`} className="relative block h-[220px] w-full">
            <img
              className="h-[270px] w-[450px] rounded-md "
              src={image}
              alt="house"
              fill
            />
          </Link>
          <div className="p-6 sm:p-8 md:py-8 w-[110%] md:px-6 ml-[-10px] lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
            <h3>
              <Link
                to={`/blog/${id}`}
                className="mb-[-50px] mt-10 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
              >
                {title}
              </Link>
            </h3>
            <p className="mb-6 mt-16 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color">
              {location}
            </p>
            <div className="flex items-center">
              <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                <div className="mr-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <img src={seller?.profileImg} alt="author" fill />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-sm font-medium  ">
                    Seller: {seller.username}
                  </h4>
                  <p className="text-xs text-body-color">{seller.email}</p>
                </div>
              </div>
            </div>
            {user?._id !== seller?._id && (
              <h4 className="mb-1 text-sm font-medium mt-5 ml-2">Your Bid:</h4>
            )}
            <div className="mt-4">
              <form>
                {user?._id !== seller?._id && (
                  <input
                    className="ml-[-150px] w-[280px] pl-3 rounded-md border-0 py-2 "
                    placeholder={`Enter your Bid, ${user?.username}`}
                    value={bid}
                    onChange={(e) => setBid(e.target.value)}
                    type="number"
                  />
                )}
                {user?._id !== seller?._id && (
                  <button
                    className="rounded-md py-1 bg-sky-700 text-white ml-[290px] mt-[-80px]"
                    type="submit"
                    onClick={handleBidSubmit}
                  >
                    Bid Now!
                  </button>
                )}

                {winningBidder !== "" || highestBid !== 0 ? (
                  <h4 className="w-96 ml-[-50px]">
                    The current highest bidder is:{" "}
                    <span className="text-sky-900">{winningBidder}</span>
                    <br />
                    The highest bid value is:{" "}
                    <span className="text-sky-900">{highestBid}</span>
                  </h4>
                ) : (
                  <h4 className="ml-[-165px]">
                    No one has bid on this property yet!
                  </h4>
                )}
                <h4 className="ml-[-110px] mt-[-30px]">
                  Time left for the auction is:{" "}
                  <span className="text-red-500">{timeLeft}</span> seconds
                </h4>
              </form>
              {user?._id == seller?._id && (
                <button
                  className="rounded-md py-1 px-3 bg-red-500 text-white ml-[320px] mt-[10px] mb-[-20px]"
                  onClick={() => {
                    setClicked(!clicked);
                    handleDelete(); // Call the deletion function directly
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Auction;

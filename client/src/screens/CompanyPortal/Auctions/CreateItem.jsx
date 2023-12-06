import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CreateItem.css";
import { useDispatch } from "react-redux";
import { request } from "../../../util/fetchAPI";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";

function CreateItem() {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [endTime, setEndTime] = useState(Date.now());
  const [isFormVisible, setIsFormVisible] = useState(true); // New state variable

  const [state, setState] = useState({});
  const [photo, setPhoto] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [base64Image, setBase64Image] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // The result attribute contains the data URL as a base64 encoded string
        const base64String = e.target.result;
        setBase64Image(base64String);
      };

      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleListReview = async (e) => {
    e.preventDefault();

    try {
      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      console.log(">>>>>States", state);

      const data = await request("/property/review", "POST", options, {
        ...state,
        img: base64Image,
      });

      console.log("data", data);
      setIsFormVisible(false);

      // If the property is successfully listed, close the form
      //   handleCloseForm();
      // navigate("/");
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };
  // You can use the 'user' prop to get details like user name, address, etc.

  const createItem = async (e) => {
    e.preventDefault();
    const formattedEndTime = new Date(endTime).toISOString();
    console.log(">>>>>>>>>>>>>", formattedEndTime);
    await fetch("http://localhost:5000/blogs/createAuction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        location,
        image: base64Image,
        seller: user?._id,
        endTime: formattedEndTime,
      }),
    }).catch((error) => error.message);
    navigate("/auction");
  };

  return (
    <section
      id="contact"
      className=" py-16 mt-10 mb-40 md:py-20 lg:py-3 lg:ml-[50px] "
    >
      <img
        className="ml-[65%] h-[520px] w-[600px] mt-[-60px]"
        src="https://img.freepik.com/free-vector/auction-house-abstract-concept-illustration-residential-commercial-property-auction-buy-sell-assets-online-exclusive-bid-consecutive-biddings-business-auctions_335657-1126.jpg"
      ></img>

      <div className="container mt-[-500px]">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Create Auction
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Fill in the details to create your auction.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="title"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter auction title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="location"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="image"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Image URL
                      </label>
                      <input
                        type="url"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      /> */}
                      <label className="mt-16" htmlFor="photo">
                        Select Your picture{" "}
                        <span>
                          <AiOutlineFileImage />
                        </span>
                      </label>
                      <input
                        type="file"
                        placeholder="Enter image URL"
                        id="photo"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      {photo && <p>{photo.name}</p>}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="endTime"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Auction End Date
                      </label>
                      <input
                        type="date"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      onClick={createItem}
                      className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white bg-sky-700 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit Auction
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateItem;

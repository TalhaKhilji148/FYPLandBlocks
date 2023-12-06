import React, { useState } from "react";
import classes from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { logout } from "../../../redux/authSlice";
import { request } from "../../../util/fetchAPI";

export default function ListProperty() {
  const [state, setState] = useState({});
  const [photo, setPhoto] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setPhoto(null);
    setState({});
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

  const [tokenizedFormVisible, setTokenizedFormVisible] = useState(false);
  const [tokens, setTokens] = useState("");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setState((prev) => {
      return { ...prev, type: selectedType };
    });

    // Show the tokenized form if the selected type is "tokenized"
    if (selectedType === "tokenized") {
      setTokenizedFormVisible(true);
    } else {
      setTokenizedFormVisible(false);
    }
  };

  const handleListProperty = async (e) => {
    e.preventDefault();

    try {
      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const data = await request("/property/company", "POST", options, {
        ...state,
        img: base64Image,
        tokens: tokens, // Add tokens to the request if it's provided
      });

      console.log("data", data);

      setShowForm(false);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  return (
    <div className={classes.listPropertyForm}>
      <div
        className={classes.listPropertyWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-10">List Property</h2>
        <form onSubmit={handleListProperty}>
          <div>
            <textarea
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              type="text"
              placeholder="Title"
              name="title"
              rows={1}
              cols={50}
              onChange={handleState}
            />
            <textarea
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              type="float"
              placeholder="Price"
              name="price"
              onChange={handleState}
              rows={1}
              cols={50}
            />
            <textarea
              className="border border-gray-400 px-3 py-2 rounded-md mr-4"
              type="text"
              placeholder="City"
              name="city"
              onChange={handleState}
              rows={1}
              cols={40}
            />
          </div>
          <div className="flex flex-row w-[100%] ml-[30%] ">
            <select
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-10"
              name="type"
              value={state.type || ""}
              onChange={handleTypeChange}
            >
              <option value="">Select property type</option>
              <option value="rental">Rental</option>
              <option value="full">Full</option>
              <option value="tokenized">Tokenized</option>
            </select>

            {tokenizedFormVisible && (
              <div>
                <input
                  className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-10"
                  type="number"
                  placeholder="Total Tokens"
                  name="tokens"
                  value={tokens}
                  onChange={(e) => setTokens(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="photo">
              Select Property picture <AiOutlineFileImage />
            </label>
            <input
              type="file"
              id="photo"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
            {photo && <p>{photo.name}</p>}
          </div>

          <div className="flex flex-row w-[100%]">
            <textarea
              className="border border-gray-400 ml-64 w-[25%] px-5 py-2 pb-32 rounded-md mr-4"
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleState}
              rows={4} // Set the number of rows
              cols={50} // Set the number of columns
            />
            <textarea
              className="border  border-gray-400 px-5 w-[43%]    py-2 pb-32 rounded-md mr-4"
              type="text"
              placeholder="Desc"
              name="desc"
              onChange={handleState}
              rows={4} // Set the number of rows
              cols={50} // Set the number of columns
            />
          </div>

          <div>
            <input
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              type="number"
              placeholder="Baths"
              name="baths"
              onChange={handleState}
            />

            <input
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              type="number"
              placeholder="Rooms"
              name="rooms"
              onChange={handleState}
            />
            <input
              type="float"
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              placeholder="Sq. meters"
              name="sqmeters"
              onChange={handleState}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "50%",
            }}
          ></div>

          <button className="bg-sky-700 hover:rgb(3 105 161)">
            List property
          </button>
        </form>
        <AiOutlineClose className={classes.removeIcon} />
      </div>
    </div>
  );
}
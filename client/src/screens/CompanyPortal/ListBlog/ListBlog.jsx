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

export default function ListBlog() {
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

 
  const handleListProperty = async (e) => {
    e.preventDefault();

    try {
      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const data = await request("/property/blog", "POST", options, {
        ...state,
        img: base64Image,
      });

      console.log("data", data);

      // If the property is successfully listed, close the form
    //   handleCloseForm();
          navigate("/companyhome");

    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };

  return (
    <div className={classes.listPropertyForm}>
      <div
        className={classes.listPropertyWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-10">List Blog</h2>
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
              type="text"
              placeholder="Category"
              name="category"
              onChange={handleState}
              rows={1}
              cols={50}
            />
            <textarea
              className="border border-gray-400 px-3 py-2 rounded-md mr-4"
              type="text"
              placeholder="Technology"
              name="technology"
              onChange={handleState}
              rows={1}
              cols={40}
            />
          </div>
          <div className="flex flex-row w-[100%] ml-[30%] ">
           
            <label htmlFor="photo">
              Select Blog picture <AiOutlineFileImage />
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
              placeholder="Link"
              name="link"
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
              type="text"
              placeholder="Author Info"
              name="authorinfo"
              onChange={handleState}
            />

            <input
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              type="text"
              placeholder="Subtitle"
              name="subtitle"
              onChange={handleState}
            />
            <input
              type="text"
              className="border border-gray-400 w-96 px-10 py-2 rounded-md mr-4"
              placeholder="SubTitle description"
              name="subdescription"
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
            List Blog
          </button>
        </form>
        <AiOutlineClose className={classes.removeIcon} />
      </div>
    </div>
  );
}

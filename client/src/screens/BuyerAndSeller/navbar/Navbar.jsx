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

const Navbar = () => {
  const [state, setState] = useState({});
  const [photo, setPhoto] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  // mobile
  const [showMobileNav, setShowMobileNav] = useState(false);

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
      console.log("Base64Image>>>>>", base64Image);
    }
  };

 const handleListProperty = async (e) => {
  //  e.preventDefault();

   try {
    //  let cloudinaryUrl = null;

    //  if (photo) {
    //    console.log("Photo 1")
    //    const formData = new FormData();
    //    formData.append("file", photo); // Use "file" as the form field name
    //    console.log("Photo 2", photo.name);

    //   //  const response = await fetch(
    //   //    "cloudinary://998314376349777:3-ZCdVkwRwyqAmg-I6YV2PFu-T4@di8akutru",
    //   //    {
    //   //      method: "POST",
    //   //      body: formData,
    //   //    }
    //   //  );
    //   console.log("Photo 33");

    //   //  if (response.ok) {
    //   //    const cloudinaryData = await response.json();
    //   //    cloudinaryUrl = cloudinaryData.secure_url;
    //   //  } else {
    //   //    throw new Error("Failed to upload image to Cloudinary");
    //   //  }
    //  }

      console.log("States", state);

     const options = {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     };
     const data = await request("/property", "POST", options, {
       ...state,
       img: base64Image,
     });

     console.log("data",data);

     setShowForm(false);
     // dispatch(updateUser(data))
     // window.location.reload()
   } catch (error) {
     console.error(error);
     console.log(error);
   }
 };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <Link to="/" onClick={scrollToTop} className={classes.left}>
          {/* <img
            className={classes.logo}
            src={require("../../assets/LandBlocks-logos_white.png")}
          ></img> */}
          <p className="text-white font-thin text-xl">LandBlocks</p>
        </Link>
        <ul className={classes.center}>
          <Link to="/" className={classes.righty} onClick={scrollToTop}>
            <li onClick={scrollToTop} className={classes.listItem}>
              Home
            </li>
          </Link>
          <Link to="/services" className={classes.righty} onClick={scrollToTop}>
            <li className={classes.listItem}>Services</li>
          </Link>

          <Link
            to={`/mylistings/${user?._id}`}
            className={classes.righty}
            onClick={scrollToTop}
          >
            <li className={classes.listItem}>My Listings</li>
          </Link>
          <Link
            to="/contactus"
            className={classes.righty}
            onClick={scrollToTop}
          >
            <li className={classes.listItem}>Contact Us.</li>
          </Link>
          <Link to="/aboutus" className={classes.righty} onClick={scrollToTop}>
            <li className={classes.listItem}>About Us.</li>
          </Link>
          <Link
            to="/auctionsell"
            className={classes.righty}
            onClick={scrollToTop}
          >
            <li className={classes.listItem}>Auction</li>
          </Link>
          <Link
            to="/machinelearning"
            className={classes.righty}
            onClick={scrollToTop}
          >
            <li className={classes.listItem}>Predict Prices</li>
          </Link>
        </ul>
        <div className={classes.right}>
          {!user ? (
            <>
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Sign in</Link>
            </>
          ) : (
            <>
              <Link onClick={() => setShowForm(true)} className={classes.list}>
                List your property
              </Link>

              <span>
                Hello{" "}
                <span className="text-white font-bold ml-1 text-lg">
                  {user.username}!
                </span>
              </span>
              <Link to="/profile">
                <img
                  className="h-12 w-12 rounded-full"
                  src={user.profileImg}
                ></img>
              </Link>

              <span className={classes.logoutBtn} onClick={handleLogout}>
                Logout
              </span>
            </>
          )}
        </div>
      </div>
      {!showMobileNav && showForm && (
        <div className={classes.listPropertyForm} onClick={handleCloseForm}>
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
                      // value={tokens}
                      onChange={handleState}
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
            <AiOutlineClose
              className={classes.removeIcon}
              onClick={handleCloseForm}
            />
          </div>
        </div>
      )}
      {
        <div className={classes.mobileNav}>
          {showMobileNav && (
            <div className={classes.navigation}>
              <Link to="/" onClick={scrollToTop} className={classes.left}>
                Real Estate <BsHouseDoor />
              </Link>
              <AiOutlineClose
                className={classes.mobileCloseIcon}
                onClick={() => setShowMobileNav(false)}
              />
              <ul className={classes.center}>
                <li onClick={scrollToTop} className={classes.listItem}>
                  Home
                </li>
                <li className={classes.listItem}>About</li>
                <li className={classes.listItem}>Featured</li>
                <li className={classes.listItem}>Contacts</li>
              </ul>
              <div className={classes.right}>
                {!user ? (
                  <>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/signin">Sign in</Link>
                  </>
                ) : (
                  <>
                    <span>Hello {user.username}!</span>
                    <span className={classes.logoutBtn} onClick={handleLogout}>
                      Logout
                    </span>
                    <Link
                      onClick={() => setShowForm(true)}
                      className={classes.list}
                    >
                      List your property
                    </Link>
                  </>
                )}
              </div>
              {showForm && (
                <div
                  className={classes.listPropertyForm}
                  onClick={handleCloseForm}
                >
                  <div
                    className={classes.listPropertyWrapper}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2>List Property</h2>
                    <form onSubmit={handleListProperty}>
                      <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleState}
                      />
                      <input
                        type="text"
                        placeholder="Type"
                        name="type"
                        onChange={handleState}
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        onChange={handleState}
                      />
                      <input
                        type="text"
                        placeholder="Desc"
                        name="desc"
                        onChange={handleState}
                      />
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={handleState}
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        onChange={handleState}
                      />
                      <input
                        type="number"
                        placeholder="Sq. meters"
                        name="sqmeters"
                        onChange={handleState}
                      />

                      <input
                        type="number"
                        placeholder="Baths"
                        name="baths"
                        step={1}
                        min={1}
                        onChange={handleState}
                      />
                      <input
                        type="number"
                        placeholder="Rooms"
                        name="rooms"
                        step={1}
                        min={1}
                        onChange={handleState}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "50%",
                        }}
                      >
                        <label htmlFor="photo">
                          Property picture <AiOutlineFileImage />
                        </label>
                        <input
                          type="file"
                          id="photo"
                          style={{ display: "none" }}
                          onChange={(e) => setPhoto(e.target.files[0])}
                        />
                        {photo && <p>{photo.name}</p>}
                      </div>
                      <button className="bg-sky-700">List property</button>
                    </form>
                    <AiOutlineClose
                      onClick={handleCloseForm}
                      className={classes.removeIcon}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          {!showMobileNav && (
            <GiHamburgerMenu
              onClick={() => setShowMobileNav((prev) => !prev)}
              className={classes.hamburgerIcon}
            />
          )}
        </div>
      }
    </div>
  );
};

export default Navbar;

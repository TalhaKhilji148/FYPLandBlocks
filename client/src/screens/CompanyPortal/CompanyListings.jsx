import React, { useState, useEffect, useContext } from "react";
import { request } from "../../util/fetchAPI";
import classes from "../BuyerAndSeller/navbar/navbar.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BsHouseDoor } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";
import { useParams } from "react-router-dom";

const arr = [];

export default function CompanyListings() {
  const { id } = useParams();
  console.log("id>>>>>>>",id)
  const [state, setState] = useState({});
  const [photo, setPhoto] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
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
  const [propertyEdit, setPropertyEdit] = useState("");

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate("/signin");
  // };

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [base64Image, setBase64Image] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log("Property Edit >>>>>", propertyEdit);
  }, [propertyEdit]);

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
    e.preventDefault();

    try {
      // Define the request options, including the Authorization header
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      // Construct the request data, including the state and base64Image
      const requestData = {
        ...state,
        img: base64Image,
        tokens: tokens, // Add tokens to the request if it's provided
      };
      console.log("334", requestData);

      // Send the HTTP request to update the property
      const response = await fetch(
        `http://localhost:5000/property/update/${propertyEdit}`,
        {
          method: "PUT", // Use "PUT" to update the resource
          headers: options.headers,
          body: JSON.stringify(requestData),
        }
      );

      // Log the entire response for debugging
      console.log("Full Response:", response);

      // Check if the response status code indicates success (e.g., 200 for OK)
      if (response.status === 200) {
        const responseData = await response.json();
        console.log("ClientData", responseData);
        setShowForm(false);
      } else {
        console.log("Server returned an error status code:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setPhoto(null);
    setState({});
  };

  const [featuredProperties, setFeaturedProperties] = useState([]);
  

  useEffect(() => {
    // console.log("initial");
    const fetchFeatured = async () => {
      try {
        const data = await request("/property/getAll", "GET");
        setFeaturedProperties(data);
        console.log("listing data>>>>", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeatured();
  }, [clicked]);

  //   const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center mt-[-130px]  items-center 2xl:px-20">
      <div className="flex flex-col md:p-12 px-4">
        {featuredProperties ? (
          <h3 className="text-black text-3xl text-center my-2 mt-10">
            Company Listings
          </h3>
        ) : (
          <h3 className="text-black text-3xl text-center my-2 mb-10">
            You don't have any listing yet!
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-centre mt-[5px] mb-[-10px]">
          {/* .filter((myitem) => myitem?.currentOwner.username === "talha") */}
          {featuredProperties
            .filter((myitem) => myitem?.currentOwner._id === id)
            .map((item, i) => (
              <div className="bg-[#fdfbfb] m-4    2xl:min-w-[480px] 2xl:max-w-[600px] sm:min-w-[470px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
                <div className=" w-full mt-3">
                  <div className="  p-2 flex ml-5">
                    <Link to={`/companypropertyDetailsSeller/${item._id}`}>
                      <img
                        className="w-64  rounded-lg h-60"
                        src={item.img}
                      ></img>
                    </Link>

                    <div className="ml-10 h-16">
                      <p className="text-black text-base w-40 font-body ">
                        <span className="font-bold">City:</span> {item.city}
                      </p>

                      <p className="text-black text-base font-body ">
                        <span className="font-bold">Baths:</span>
                        {item.baths}
                      </p>
                      <p className="text-black text-base font-body ">
                        <span className="font-bold">Rooms:</span> {item.rooms}
                      </p>

                      <p className="text-black text-base w-40 font-body">
                        <span className="font-bold">Price:</span> {item.price}{" "}
                        eth
                      </p>
                      <p className="text-black text-base w-60 font-body">
                        <span className="font-bold">Description:</span>
                        <span clasName = "ml-1"></span> {item.desc} eth
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row ml-72  h-10">
                    <Link
                      onClick={() => {
                        setShowForm(true);
                        setPropertyEdit(item._id);
                      }}
                      className="  bg-sky-700 w-32 rounded-lg text-white"
                    >
                      <div className="flex flex-row ml-12 mt-2 h-10">Edit</div>
                    </Link>
                    {!showMobileNav && showForm && (
                      <div
                        className={classes.listPropertyForm}
                        onClick={handleCloseForm}
                      >
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
                              Update property
                            </button>
                          </form>
                          <AiOutlineClose
                            className={classes.removeIcon}
                            onClick={handleCloseForm}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setClicked(!clicked);
                        fetch(`http://localhost:5000/property/${item._id}`, {
                          method: "DELETE",
                        })
                          .then((response) => {
                            console.log("Response>>>>>", response);
                          })
                          .catch((error) => {
                            console.error("An error occurred:", error);
                          });
                      }}
                      className="  ml-4  bg-red-600 w-32 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center items-centre h-32 mb-14 "></div>
      </div>
    </div>
  );
}

import React,{useState} from "react";
// import { logo } from "../assets";
import ReviewModal from "../../../components/ReviewModal";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReviewClick = () => {
    setShowReviewModal(true);
  };
  return (
    <div className="w-full bg-black py-24 ">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          {/* <img src={logo} className="h-[25px]" /> */}
          <h3 className="text-2xl font-bold  text-white mb-8">Contact Us</h3>
          <h3 className="py-2 text-[white]">Call : +123 400 123</h3>
          <h3 className="py-2 text-[white]">
            this is my random text <br></br> Landblocks in, crypto world felis.
          </h3>
          <h3 className="py-2 text-[#f5fbff]">Email: example@gmail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[white] rounded-xl">
              <FaFacebookF size={25} style={{ color: "blue" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <FaDribbble size={25} style={{ color: "red" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <FaLinkedinIn size={25} style={{ color: "darkblue" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <FaInstagram size={25} style={{ color: "orange" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <FaBehance size={25} style={{ color: "purple" }} />
            </div>
          </div>
        </div>

        <div className="mt-[-70px]">
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[white]">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Property</li>
            <li className="py-2">Services</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div className="mt-[-70px]">
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[white]">
            <li className="py-2">Tokenizations</li>
            <li className="py-2">Rental Payments</li>
            <li className="py-2">About us</li>
            <li className="py-2">Profit</li>
            <li className="py-2">Trading cards</li>
            <li className="py-2">Activity</li>
            <li className="py-2">Utility</li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2 mt-[-50px]">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <h3 className="py-2 text-[white] ml-[-40px]">
            My random values, footer LandBlocks is a platform to buy properties
            on enthereum.
          </h3>
          <form className="py-2 flex flex-row ml-[-40px]">
            <input
              className="bg-[#F2F3F4] p-3 w-64 mb-10 rounded"
              placeholder="Email here"
            />
            <div className="flex flex-row">
              <button className="max-[1080px]:w-full my-4 mt-[-25px] px-3 ml-[-20px] py-3 mr-5  rounded-md bg-sky-700 text-white font-medium">
                <p className="w-32">Contact Now</p>
              </button>

              {/* Render the ReviewModal conditionally based on state */}
            </div>
          </form>
          <div className="ml-[-30px]">
            <ReviewModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { SlGraduation } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";

const AboutApp = () => {
  return (
    <div className="bg-white py-24 ml-36">
      <div className="md:max-w-[1480px] m-auto grid  max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-center ">
          <div className="self-center mr-32 text-[#0369a1] ">
            <h1 className=" text-5xl justify-self-center font-bold font-sans text-center">
              You don’t have to be a <br></br>pro to invest like one
            </h1>
            <p className="text-lg text-gray-600 justify-center text-center font-medium mt-5 text-md ">
              Get instant access to great property deals, in-depth <br />
              analysis, and a community of wealth builders from around <br />
              the world.
            </p>
          </div>
          <div className="grid grid-cols-2 py-16 self-center mr-32">
            <div className="bg-[#c5cecc56] max-h-5xl  justify-center rounded-xl max-w-4xl px-10 flex mr-10 mb-10">
              <div>
                <h1 className="text-3xl  text-[#0369a1] self-start w-40 mr-40 mt-10 ml-2 font-semibold font-sans">
                  Skip the down payment
                </h1>
                <p className="text-[#000000] w-64  text-lg ml-2 mt-12">
                  Acquire fractional ownership of rental properties.professional
                  property managers handle the rest.
                </p>
                <img
                  className="w-32 h-36 ml-72 mt-[-20px]"
                  src="https://global-uploads.webflow.com/5eb83629a119283a8908371b/64109da9dff0a68432783f82_skip%20the%20down%20payment.webp"
                />
              </div>
              {/* <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  }
                />
              </div> */}
            </div>
            <div className="bg-[#c5cecc56] max-h-5xl  justify-center rounded-xl max-w-3xl flex mr-10 mb-10">
              <div>
                <h1 className="text-3xl  text-[#0369a1] w-40 self-start mr-40 mt-10 ml-2 font-semibold font-sans">
                  Earn rent today, appreciation tomorrow
                </h1>
                <p className="text-[#000000] w-64 mt-5 text-lg ml-2 ">
                  Get daily rent payouts (not monthly or quarterly) and collect
                  property appreciation when you cash out.
                </p>
                <img
                  className="w-32 h-36 ml-72 mb-5"
                  src="https://global-uploads.webflow.com/5eb83629a119283a8908371b/64109db79786bbdfa70ead2a_earn%20rent%20and%20appreciation.webp"
                />
              </div>
              {/* <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  }
                />
              </div> */}
            </div>
            <div className="bg-[#c5cecc56] max-h-5xl  justify-center rounded-xl max-w-3xl flex mr-10 mb-10">
              <div>
                <h1 className="text-3xl  text-[#0369a1] self-start w-40 mr-40 mt-10 ml-2 font-semibold font-sans">
                  Own multiple properties
                </h1>
                <p className="text-[#000000] w-64 mt-5 text-lg ml-2 ">
                  Diversify your portfolio without multiplying your workload.
                  Vote on key property decisions, and rest is handled by
                  Professional Team
                </p>
                <img
                  className="w-32 h-36 ml-72 mb-5"
                  src="https://global-uploads.webflow.com/5eb83629a119283a8908371b/64109dc8add4994603530397_own%20multiple%20properties.webp"
                />
              </div>
              {/* <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  }
                />
              </div> */}
            </div>
            <div className="bg-[#c5cecc56] max-h-5xl  justify-center rounded-xl max-w-3xl flex mr-10 mb-10">
              <div>
                <h1 className="text-3xl  text-[#0369a1] self-start w-40 mr-40 mt-10 ml-2 font-semibold font-sans">
                  Keep full control of your investments
                </h1>
                <p className="text-[#000000] w-64 mt-5 text-lg ml-2 ">
                  Forget expensive brokers and lock-in periods. Easily reinvest
                  your rental income for the long term.
                </p>
                <img
                  className="w-32 h-36 ml-72 mb-5"
                  src="https://global-uploads.webflow.com/5eb83629a119283a8908371b/64109dd4855f7f09947f629d_keep%20full%20control.webp"
                />
              </div>
              {/* <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  }
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;

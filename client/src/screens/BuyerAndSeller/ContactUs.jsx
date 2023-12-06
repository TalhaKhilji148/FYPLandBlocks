import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactUs = () => {
//   return (
//     <section className="pb-10 lg:ml-52 ">
//       <div className="flex flex-wrap md:px-4">
//         <form className="p-8 md:mx-4 bg-white rounded-md shadow-md">
//           <div className="m-3">
//             <h3 className="text-2xl text-gray-800 font-bold mb-6">
//               Contact Us
//             </h3>
//           </div>
//           <div className="w-full flex flex-wrap">
//             <div className="w-full md:w-1/2">
//               <div className="m-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                   className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="m-3">
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="Your Email"
//                   className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
//                 />
//               </div>
//             </div>
//             <div className="w-full">
//               <div className="m-3">
//                 <input
//                   type="text"
//                   name="subject"
//                   required
//                   placeholder="Subject"
//                   className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
//                 />
//               </div>
//             </div>
//             <div className="w-full">
//               <div className="m-3">
//                 <textarea
//                   name="message"
//                   required
//                   placeholder="Your Message"
//                   rows="6"
//                   className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
//                 />
//               </div>
//             </div>
//             <div className="w-full">
//               <div className="m-3 text-right">
//                 <input
//                   type="submit"
//                   value="Send Message"
//                   className="rounded bg-blue-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-purple-800 cursor-pointer"
//                 />
//               </div>
//             </div>
//           </div>
//           <ToastContainer />
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import NewsLatterBox from "../../components/NewsLatterBox";

const ContactUs = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 mt-10 mb-40 md:py-20 lg:py-3 lg:ml-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact us for information
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#f5f6fd] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white bg-sky-700 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit Issue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


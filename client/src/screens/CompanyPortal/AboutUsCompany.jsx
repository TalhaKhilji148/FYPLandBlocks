import React from "react";
import { SlPeople } from "react-icons/sl";

const AboutUsCompany = () => {
  return (
    <div className=" bg-white py-24 ml-24 ">
      <div className="md:max-w-[1480px] m-auto   max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-center ">
          <div className="self-center mr-32 text-[#08165d] ">
            <h1 className=" text-5xl justify-self-center font-bold font-sans text-center">
              There has to be a better way to invest in <br></br> real estate
            </h1>
            <p className="text-lg text-gray-600 justify-center text-center font-medium mt-5 text-md ">
              Get instant access to great property deals, in-depth <br />
              analysis, and a community of wealth builders from around <br />
              the world.
            </p>
          </div>

          <div className="ml-8">
            <div className="grid grid-cols-2 py-16 self-center mr-32">
              <div className="bg-[#c5cecc56] max-h-5xl  justify-center rounded-xl max-w-3xl flex mr-10 mb-10">
                <div>
                  <h1 className="text-2xl  text-[#08165d] self-start ml-10 mr-40 mt-10  font-thin font-sans">
                    Our goal is to make real estate investing as simple as
                    investing in stocks or crypto. Diversification is key to any
                    investment strategy, but the barrier to entry for real
                    estate investing has always been so high. We don't believe
                    that should be the case.
                  </h1>
                  {/* <p className="text-[#08165d] w-32 mt-5">
                    Acquire fractional ownership of rental properties.
                  </p> */}
                </div>
              </div>
              <div>
                <img
                  src={
                    "https://www.bankrate.com/2021/12/12091324/Best-blockchain-ETFs.jpg?auto=webp&optimize=high&crop=16:9"
                  }
                />
              </div>
            </div>
          </div>

          <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white  sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div class="relative">
              <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                  <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    LandBlocks
                  </p>
                  <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900  sm:text-3xl sm:leading-9">
                    Build wealth with real estate, one brick at a time
                  </h4>
                  <p class="mt-4 text-lg leading-6 text-gray-500 ">
                    Invest in rental properties without getting locked in (or
                    out). Buy just a fraction of a property and collect your
                    first rent payment later today. it&#x27;s will be simple and
                    efficient.
                  </p>
                  <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                          Ethereum Payments
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                          Data Analysis
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                          24/24 support
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                          Secure Platform
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                  <div class="relative space-y-4">
                    <div class="flex items-end justify-center space-x-4 lg:justify-start">
                      <img
                        class="w-32 rounded-lg shadow-lg md:w-56"
                        width="200"
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3BlcnR5fGVufDB8fDB8fHww&w=1000&q=80"
                        alt="1"
                      />
                      <img
                        class="w-40 rounded-lg shadow-lg md:w-64"
                        width="260"
                        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="2"
                      />
                    </div>
                    <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                      <img
                        class="w-24 rounded-lg shadow-lg md:w-40"
                        width="170"
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb3BlcnR5fGVufDB8fDB8fHww&w=1000&q=80"
                        alt="3"
                      />
                      <img
                        class="w-32 rounded-lg shadow-lg md:w-56"
                        width="200"
                        src="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg"
                        alt="4"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="p-8 mt-32 bg-gray-100 rounded-lg shadow w-[1200px]">
                    <p class="text-3xl font-bold text-center text-gray-800 ">
                      Professional team
                    </p>
                    <p class="mb-12 mt-5 text-xl font-normal text-center text-gray-500 ">
                      Meet the best team in world behind LandBlocks
                    </p>
                    <div class="flex flex-col items-center md:flex-row justify evenly">
                      <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
                              class="mx-auto object-cover rounded-full h-40 w-40 "
                            />
                          </a>
                        </div>
                        <div class="text-center">
                          <p class="text-2xl text-gray-800 ">Shahryar Khan</p>
                          <p class="text-xl font-light text-gray-500 ">
                            AI and Data Engineer
                          </p>
                          <p class="max-w-xs py-4 font-light text-gray-500 text-md ">
                            Shehryar , born November 14, 2001 is an imitator.
                          </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200  hover:text-sky-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-sky-300 "
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-black"
                              viewBox="0 0 1792 1792"
                            >
                              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-blue-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-red-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/47430892_1944466532525303_7283930608898670592_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeH3ra9t-LYSsskiF9V8bJCDUxxH5gZVYgRTHEfmBlViBAHKvUUjXIKUayACCAXOFcWMB4-0-HmyI_nXuCp0IPEo&_nc_ohc=fiOt7F5rxTYAX--aEk_&_nc_ht=scontent.fisb1-2.fna&oh=00_AfCcVVVOcd1qk91ptVJ4zg2eESH6IBCF4lvE-qvSNE7FFg&oe=65881B59"
                              class="mx-auto object-cover rounded-full h-40 w-40 "
                            />
                          </a>
                        </div>
                        <div class="text-center">
                          <p class="text-2xl text-gray-800 ">Muhammad Talha</p>
                          <p class="text-xl font-light text-gray-500 ">
                            Blockchain & MERN developer
                          </p>
                          <p class="max-w-xs py-4 font-light text-gray-500 text-md ">
                            Talha Khilji is an imitator, humorist, born july 23,
                            2001.
                          </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                          <a href="https://www.facebook.com/talha.rizwan.92/">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-sky-700 "
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                            </svg>
                          </a>
                          <a href="https://twitter.com/talharizwan23">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-sky-300 "
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                            </svg>
                          </a>
                          <a href="https://github.com/TalhaKhilji23/FYP-LandBlocks">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-black "
                              viewBox="0 0 1792 1792"
                            >
                              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/talha-khilji-01a9731a1/">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-blue-700 "
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/talha-khilji-01a9731a1/">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-red-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/141487448_177183284189875_6727719504932193149_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeHhr1YyeW3ah31dKKXlu_KZfLV8eUd5FRF8tXx5R3kVEfBdT9u4_wAPus51bu4NH71kai3yxyogKUqRTa1ToNKy&_nc_ohc=5nOFPF8c3NsAX-RiDCZ&_nc_oc=AQmLW8BlPXLLhn8D9NIJdz2UeUOauEwhV29qOlgFF_77b8OrpTTJQOiQ2QG4jocABYY&_nc_ht=scontent.fisb1-2.fna&oh=00_AfBb2oZnR5w3EXS-XKKI3_WZQskG9digS23-o67UxF3Hzg&oe=65882A82"
                              class="mx-auto object-cover rounded-full h-40 w-40 "
                            />
                          </a>
                        </div>
                        <div class="text-center">
                          <p class="text-2xl text-gray-800 ">
                            Muhammad Soban Fayyaz
                          </p>
                          <p class="text-xl font-light text-gray-500 ">
                            MERN & Data Analyst
                          </p>
                          <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                            Soban, born November 4, 2001 , is mern specialist.
                          </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-sky-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-sky-300"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-black"
                              viewBox="0 0 1792 1792"
                            >
                              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-blue-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="text-xl transition-colors duration-200 hover:text-red-700"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCompany;

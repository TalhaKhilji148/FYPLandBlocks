import React from 'react'

export default function AllPropertyList() {
  return (
    <div>
      <div class="w-full p-12 bg-white">
        <div class="flex items-end justify-between mb-12 header">
          <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
              Lastest articles
            </p>
            <p class="text-2xl font-light text-gray-400">
              All article are verified by 2 experts and valdiated
            </p>
          </div>
          <div class="text-end">
            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div class=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                class="flex-shrink-0  py-2 text-base font-semibold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">Video</p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  Work at home, remote, is the new age of the job, every person
                  can work at home....
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">Oui</p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  New property in Islamabad here for you, Enjoy LandBlocks!!
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?cs=srgb&dl=pexels-eziz-charyyev-1475938.jpg&fm=jpg"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">Oui</p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  New property in Islamabad here for you, Enjoy LandBlocks!!
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://wallpaperaccess.com/full/3885499.jpg"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyamin-mellish-1396132.jpg&fm=jpg"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md"></p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  New property in Islamabad here for you, Enjoy LandBlocks!!
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md"></p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  New property in Islamabad here for you, Enjoy LandBlocks!!
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" class="block w-full h-full">
              <img
                alt="blog photo"
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg"
                class="object-cover w-full max-h-40"
              />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">Oui</p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  New property in Islamabad here for you, Enjoy LandBlocks!!
                </p>
                <div class="flex items-center mt-4">
                  <a href="#" class="relative block">
                    <img
                      alt="profil"
                      src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg"
                      class="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">Muhammad Talha</p>
                    <p class="text-gray-400 dark:text-gray-300">
                      20 mars 2023 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

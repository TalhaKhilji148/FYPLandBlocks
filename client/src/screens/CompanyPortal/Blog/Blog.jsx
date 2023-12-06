import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { Link } from "react-router-dom";
import { request } from "../../../util/fetchAPI";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);


   useEffect(() => {
    console.log("innnn")
     // console.log("initial");
     const fetchData = async () => {
       try {
         console.log("innnn22");
         const data = await request("/blogs/getAllBlogs", "GET");
         console.log("ttttttttttttttttttttt ", data);

         setBlogData(data);
       } catch (error) {
         console.error(error);
       }
     };
     fetchData();
   }, []);

  // useEffect(() => {
  //   // Define a function to fetch blog data
  //   const fetchBlogData = async () => {
  //     try {
  //       const response = await fetch("/blogs/getAllBlogs"); // Replace "/api/blogs" with the correct API endpoint
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch blog data");
  //       }

  //       const data = await response.json();
  //       setBlogData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // Call the fetchBlogData function
  //   fetchBlogData();
  // }, []);

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:pt-4">
      <div className="ml-20 container">
        <h3 className="text-black text-3xl text-center my-2 font-bold mb-20">All Blogs</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog._id} className="w-full">
              <Link to={`/blog/${blog._id}`}>
                {/* Adjust the link to navigate to the specific blog page */}
                <SingleBlog blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

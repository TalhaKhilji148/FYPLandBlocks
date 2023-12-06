import React,{useEffect,useState} from "react";
import FeedbackCard from "../../components/FeedbackCard";
// import { Users } from "../../global/dummyData";
import { Link } from "react-router-dom";
import { request } from "../../util/fetchAPI";

const Feedback = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    console.log("innnn");
    // console.log("initial");
    const fetchData = async () => {
      try {
        console.log("innnn22");
        const data = await request("/property/getAllReviews", "GET");
        console.log("ttttttttttttttttttttt ", data);

        setReviewData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" bg-white py-32 ">
      <Link to={`/allproperties`}>
        <div className="flex items-center justify-center mt-[-40px]">
          <div className="bg-[#0369A1] h-16 w-80  rounded-xl">
            <p className="text-center pt-5 text-white text-xl font-medium">
              View Properties
            </p>  
          </div>
        </div>
      </Link>

      <div className="flex-wrap px-4 md:px-0 ">
        <div className="py-4">
          <h1 className="py-3 ml-20 text-3xl font-bold">
            Users' <span className="text-[#6e7bbd]">Reviews</span>
          </h1>
          <p className="text-[#08165d] ml-20">Comments about LandBlocks.</p>
        </div>

        <div className="flex ml-12 overflow-x-scroll scroll overflow-hidden	 scroll-smooth">
          {reviewData.map((item, i) => (
            <FeedbackCard
              name={item.name}
              address={item.address}
              details={item.details}
              img={item.img}
              star = {item.star}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

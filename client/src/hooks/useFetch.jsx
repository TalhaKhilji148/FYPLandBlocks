import { useEffect, useState } from "react";
const API_KEY = "g3D8L0e1Y8o7us8187EpOgeePZ1jMWDe";
const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");
  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1}`
      );
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);
  return gifUrl;
};
export default useFetch;

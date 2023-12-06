import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import "../../App.css";
import { useParams } from "react-router-dom";
import LoaderIpfs from "../../components/LoaderIpfs";
// insert your infura project crediental you can find
// easily these your infura account in API key management section
const projectId = "2SejLJwa1KoSV5ri1HU83uuiP0W";
const projectSecretKey = "519bb3c38dcc8dd3cfad9b3348cc6e14";
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

function IpfsScreen() {
  const { id } = useParams();
  console.log('id>>>',id)


  const [buf, setBuf] = useState();
  const [hash, setHash] = useState("");
  const [loader, setLoader] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    event.preventDefault();
    setLoader(true);
    let ipfsId;
    const result = await ipfs.add(file).then((response) => {
        console.log("Response>>>>>>>>>>>>>>> ", response);

        // console.log("Response hash>>>>>>>>>>>>>>>>", response[0].result.path);
        ipfsId = response.path
        // ipfsId = "QmTAkENKvTGy9KCsgkd9LySGY63XoDwEomXznyqyzdqUdb";
        console.log("Generated IPFS Hash: ", ipfsId)
        setHash(ipfsId);
      }).catch((err) => {
        console.error(err)
        alert('An error occurred. Please check the console');
      })
    if (ipfsId){

      try {
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjIxZTk1M2E0YTQzMjZiZjZjYzZhZSIsImlhdCI6MTcwMDY3NDU2MywiZXhwIjoxNzAxMTA2NTYzfQ.yACRjOa8kTcwEUb2gS_VO8YY1iAr4yAwYBe06x8pKcc",
            "Content-Type": "application/json",
          },
        };
        console.log("propertyId", id);

        const requestData = {
          _id: id,
          document: `https://ipfs.io/ipfs/${ipfsId}`,
        };

        const response = await fetch(
          "http://localhost:5000/property/changedoc",
          {
            method: "PUT",
            headers: options.headers,
            body: JSON.stringify(requestData),
          }
        );

        console.log("Full Response:", response);

        if (response.status === 200) {
          const responseData = await response.json();
          console.log("DocumentData", responseData);
        } else {
          console.log("Server returned an error status code:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      
      setShowLinks(true)
    }
    else
      setShowLinks(false)
    setLoader(false);


  
  if (loader) {
    return (
      <LoaderIpfs />
    )
 

   
  };
}

  return (
    <div className="">
      {ipfs && (
        <>
          <h3 className="text-center font-bold text-3xl my-10 mb-16">
            Upload Property Docs to IPFS
          </h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" />
            <button className="bg-sky-700 mb-10 rounded-md" type="submit">
              Upload Document
            </button>
          </form>
        </>
      )}
      {showLinks ? (
        <div>
          <p className = "text-center font-xl font-bold mb-5">
            ---------------------------------------------------------------------------------------------
          </p>
          <h6 className="text-black-600 ml-[40%] text-l font-bold">
            IPFS Hash: {hash}
          </h6>
          {/* <p className="text-blue-600 ml-[40%] text-l font-bold">
            Non clickabe Link: https://ipfs.io/ipfs/{hash}
          </p> */}
          <a
            className="text-blue-600 ml-[40%] text-xl font-bold"
            href={"https://ipfs.io/ipfs/" + hash}
          >
            Clickable Link to view file on IPFS
          </a>
        </div>
      ) : (
        <p></p>
      )}
  
    </div>
  );
}

export default IpfsScreen;

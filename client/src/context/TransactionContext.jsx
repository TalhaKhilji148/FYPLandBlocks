import React, { useEffect, useState } from "react";
import { contractABI, contractAddress } from "../util/constants";
import { ethers } from "ethers";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux"; // Import hooks
import useAuth from "./useAuth"; // Replace with the actual path
// import { useSelector } from "react-redux";

export const TransactionContext = React.createContext();
const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const getAllofTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      console.log(availableTransactions);
      const structuredTransactions = availableTransactions
        .filter(
          (transaction) =>
            transaction.keyword !== "random" &&
            transaction.keyword !== "house payment" 
            // && transaction.keyword !== "test"
        )
        .map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.receiver,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) * 10 ** 18,
        }));

      setTransactions(structuredTransactions);
      console.log(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("Account:", accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllofTransactions();
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };
  // const { user, token } = useAuth(); // Use custom hook
  // const { user, token } = useSelector((state) => state.auth);

  const sendTransaction = async (propertyId, userId, tokens) => {
    console.log("1111");
    try {
      if (!ethereum) return alert("Please install metamask");
      const { addressTo, amount, keyword, message } = formData;

      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 GWEI
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      // console.log("Property Id", proper)
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
      console.log("TokenNumber>>>>>>>>>>>", tokens);

      if (tokens == 0) {
        console.log("innnnn");
        try {
          const options = {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjIxZTk1M2E0YTQzMjZiZjZjYzZhZSIsImlhdCI6MTcwMTg1NzQzOSwiZXhwIjoxNzEwNDk3NDM5fQ.LDS6bd4QNble4rzAVFLRMIFAfwJ2P5-2K8rAUX17mKg",
              "Content-Type": "application/json",
            },
          };
          console.log("propertyId", propertyId);

          const requestData = {
            _id: propertyId,
            currentOwner: userId,
          };

          const response = await fetch(
            "http://localhost:5000/property/changeowner",
            {
              method: "PUT",
              headers: options.headers,
              body: JSON.stringify(requestData),
            }
          );

          console.log("Full Response:", response);

          if (response.status === 200) {
            const responseData = await response.json();
            console.log("ClientData", responseData);
          } else {
            console.log(
              "Server returned an error status code:",
              response.status
            );
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      if (tokens > 0) {
        try {
          const reservationData = {
            propertyId,
            userId,
            tokens,
          };
          const options = {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjIxZTk1M2E0YTQzMjZiZjZjYzZhZSIsImlhdCI6MTcwMTg1NzQzOSwiZXhwIjoxNzEwNDk3NDM5fQ.LDS6bd4QNble4rzAVFLRMIFAfwJ2P5-2K8rAUX17mKg",
              "Content-Type": "application/json",
            },
          };

          const reservationResponse = await fetch(
            "http://localhost:5000/property/reserveTokens",
            {
              method: "POST",
              headers: options.headers,
              body: JSON.stringify(reservationData),
            }
          );

          if (reservationResponse.status === 200) {
            const reservationResult = await reservationResponse.json();
            console.log("Reservation Result:", reservationResult);
          } else {
            console.log(
              "Server returned an error status code:",
              reservationResponse.status
            );
          }
        } catch (error) {
          console.error("An error occurred during token reservation:", error);
        }
      }

      const transactionCount =
        await transactionContract.getAllTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionExists = async () => {
    try {
      console.log("TransactionsExists");
      const transactionContract = getEthereumContract();
      const transactionCount =
        await transactionContract.getAllTransactionCount();
      console.log("Transaction COunt", transactionCount);

      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../util/shortenAddress";
import useFetch from "../../hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="bg-[#ebedf3d9] m-4 flex flex-1  2xl:min-w-[280px] 2xl:max-w-[200px] sm:min-w-[170px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className=" w-full mb-6 p-2">
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-black text-base">
              From : {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-black text-base">
              To : {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-black text-base ">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-black text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default function Transactions() {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 welcome-back2">
      <div className="flex flex-col md:p-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : ( 
          <h3 className="text-white text-3xl text-center my-2 mb-20">
            Connect Your Account to check the latest Transation
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-centre mt-10">
          {transactions.map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-centre h-32 mb-14 "></div>
      </div>
    </div>
  );
}

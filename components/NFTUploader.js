import React, { useState, useRef } from "react";
import Image from "next/image";
import { useMoralisFile, useMoralis } from "react-moralis";

export default function NFTUploader() {
  function onHandy() {}
  const imagepicker = useRef();
  const [InputData, setInputData] = useState({
    Name: "",
    Creator: "",
    Date: "",
    Description: "",
    Price: "",
    ImageUrl: "",
  });
  const { saveFile } = useMoralisFile();
  const { user } = useMoralis();

  return (
    <div>
      <div className="w-full flex flex-col h-full shadow-xl bg-slate-900">
        <h1 className="text-3xl text-white font-bold text-center mb-6 mt-6">
          MetaPhresh NFT Factory
        </h1>
        <div className="sm:grid sm:grid-cols-2">
          <div className="sm:grid col-span-1">
            <div className="w-full flex flex-col h-screen  p-3 md:w-auto bg-gradient-to-b from-white to-slate-200 lg:w-auto mx-auto border-slate-700 shadow-lg rounded-xl">
              <div className="  mx-auto w-auto rounded-xl shadow-lg ">
                <div className="bg-black p-3 rounded-t-xl text-white font-semibold text-center text-3xl">
                  {InputData.Name}
                </div>
                {/* <Image */}
                <video
                  src={
                    InputData.ImageUrl
                      ? InputData.ImageUrl
                      : "/AFE Son WEB3D.mp4"
                  }
                  autoPlay
                  controls
                  alt="NFT IMage"
                  height={400}
                  width={400}
                  className="aspect-w-4 m-0"
                />
                <div className="bg-black rounded-b-xl p-3 -mt-0 text-white font-semibold text-center text-2xl">
                  {InputData.Price} MATIC
                </div>
              </div>
              <button className="text-center text-xl text-white font-semibold bg-green-600 p-2 rounded-xl mt-2 shadow-lg">
                Mint Now
              </button>
            </div>

            <div className="flex-col font-semibold  p-2 bg-white border-slate-400 border-2 rounded-xl w-4/5 mx-auto mt-6">
              <p className="text-lg font-bold">Descritpion:</p>
              <p>{InputData.Description}</p>
            </div>
          </div>
          <div className="sm:grid sm:col-span-1">
            <div className="w-full p-3  bg-gradient-to-b from-white to-slate-200  mx-auto border-slate-500 shadow-lg rounded-xl">
              <div className="m-3 flex overflow-y-scorll justify-center flex-col p-2 bg-gradient-to-b from-sky-600 to-sky-900 rounded-xl pb-6">
                <div
                  onClick={imagepicker}
                  className="h-20 w-20 mx-auto rounded-full animate-bounce  bg-green-800 text-white pt-2 text-center font-extrabold text-5xl -mt-14 items-center border-slate-600  border-4 shadow-md shadow-slate-300 mb-1"
                >
                  <span>
                    +
                    <input
                      hidden
                      type="file"
                      onChange={onHandy}
                      ref={imagepicker}
                      value={InputData.ImageUrl}
                    />
                  </span>
                </div>
                <label className="flex font-semibold justify-center text-center text-white drop-shadow-lg shadow-gray-400">
                  ADD IMAGE
                </label>
                <label className="text-gray-200 font-semibold transform -r  ml-12">
                  Name
                </label>
                <div className="h-16 w-4/5 flex mt-4 rounded-lg bg-white mx-auto">
                  <input
                    type="text "
                    onChange={(e) =>
                      setInputData({ ...InputData, Name: e.target.value })
                    }
                    value={InputData.Name}
                    className=" flex justify-center mx-auto outlline text-lg font-semibold drop-shadow-lg outline-slate-600 items-center h-10 mr-3 ml-3 w-full m-3"
                  />
                </div>
                <label className="text-gray-200 font-semibold transInput -r  ml-12">
                  Creator
                </label>
                <div className="h-16 w-4/5 flex mt-4 rounded-lg bg-white mx-auto">
                  <input
                    type="text "
                    onChange={(e) =>
                      setInputData({ ...InputData, Creator: e.target.value })
                    }
                    value={InputData.Creator}
                    className=" flex justify-center mx-auto outlline text-lg font-semibold drop-shadow-lg outline-slate-600 items-center h-10 mr-3 ml-3 w-full m-3"
                  />
                </div>
                <label className="text-gray-200 font-semibold transInput -r  ml-12">
                  Date
                </label>
                <div className="h-16 w-4/5 flex mt-4 rounded-lg bg-white mx-auto">
                  <input
                    type="date"
                    onChange={(e) =>
                      setInputData({ ...InputData, Date: e.target.value })
                    }
                    value={InputData.Date}
                    className=" flex justify-center mx-auto outlline text-lg font-semibold drop-shadow-lg outline-slate-600 items-center h-10 mr-3 ml-3 w-full m-3"
                  />
                </div>
                <label className="text-gray-200 font-semibold transform -r  ml-12">
                  Description
                </label>
                <div className="h-16 w-4/5 flex mt-4 rounded-lg bg-white mx-auto">
                  <input
                    type="text "
                    onChange={(e) =>
                      setInputData({
                        ...InputData,
                        Description: e.target.value,
                      })
                    }
                    value={InputData.Description}
                    className=" flex justify-center mx-auto outlline text-lg font-semibold drop-shadow-lg outline-slate-600 items-center h-10 mr-3 ml-3 w-full m-3"
                  />
                </div>
                <label className="text-gray-200 font-semibold transform -r  ml-12">
                  Price
                </label>
                <div className="h-16 w-4/5 flex mt-4 rounded-lg bg-white mx-auto">
                  <input
                    type="text "
                    onChange={(e) =>
                      setInputData({ ...InputData, Price: e.target.value })
                    }
                    value={InputData.Price}
                    className=" flex justify-center mx-auto outlline text-lg font-semibold drop-shadow-lg outline-slate-600 items-center h-10 mr-3 ml-3 w-full m-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

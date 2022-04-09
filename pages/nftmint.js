import React, { useState, useRef } from "react";
import Image from "next/image";
import { useMoralisFile, useMoralis } from "react-moralis";
import NFTUploader from "../components/NFTUploader";

export default function Home() {
  return (
    <div>
      <NFTUploader />
    </div>
  );
}

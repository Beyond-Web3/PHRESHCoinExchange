import Head from "next/head";
import {
  createContext,
  Fragment,
  useContext,
  useReducer,
  useState,
} from "react";
import { useMoralis, Moralis } from "react-moralis";

export default function Layout({ children }) {
  const { Moralis, web3 } = useMoralis();

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Created by Doug Bowmer" />
        <link rel="icon" href="/mushroomie.jpg" />
      </Head>
      <div>
        <main>{children}</main>
      </div>

      {/* BOTTOM OF THE DOCUMENT /////////////////////////////////////////////////////////////////////// */}
    </Fragment>
  );
}

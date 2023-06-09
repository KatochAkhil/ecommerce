import Faq from "@/components/Faq";
import Head from "next/head";
import React from "react";

function FaqPage() {
  return (
    <>
      <Head>
        <title>Frequently Ask Questions </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Faq />
    </>
  );
}

export default FaqPage;

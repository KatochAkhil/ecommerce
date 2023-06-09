import Head from "next/head";
import CommonBannner from "@/components/CommonBanner";
import Subscribe from "@/components/Subscribe";
import Filter from "@/components/Category/Filter";
import { useRouter } from "next/router";

export default function CategoryProducts() {
  const router = useRouter();
  console.log(router?.query?.category, "router");
  const categories = [
    {
      image: "./images/men-01.jpg",
      title: "Men Shirts Section",
      category: "Men Shirts Section",
      price: "$45.00",
    },
    {
      image: "./images/men-02.jpg",
      title: "Men Jeans Section",
      category: "Men Jeans Section",
      price: "$120.00",
    },
    {
      image: "./images/men-03.jpg",
      title: "Men Shoes Section",
      category: "Men Shoes Section",
      price: "$120.00",
    },
    {
      image: "./images/women-01.jpg",
      title: "Women Shirts Section",
      category: "Men Shirts Section",
      price: "$120.00",
    },
    {
      image: "./images/women-02.jpg",
      title: "Women jeans Section",
      category: "Men jeans Section",
      price: "$120.00",
    },
    {
      image: "./images/women-03.jpg",
      title: "Women Shoes Section",
      category: "Men Shoes Section",
      price: "$120.00",
    },
  ];

  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonBannner
        image="./images/about-us-page-heading.jpg"
        title={`Products  -> ${router?.query?.category}`}
        subHeading="Our E-commerce App is awesome"
      />
      <Filter products={categories} />
      <Subscribe />
    </>
  );
}

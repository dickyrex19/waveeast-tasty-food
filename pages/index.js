import Head from "next/head";
import FoodItem from "../components/FoodItem";

export default function Home() {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Tasty Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <div className="md:w-6/12 w-10/12 mt-12">
          <h1 className="text-6xl font-bold text-brown font-oswald">
            Lower sugar recipes
          </h1>
          <p className="mt-6 text-md font-open-sans">
            As we go about our hectic, busy days, it can be very easy to resort
            to a sugary snack midway through the afternoon to keep your energy
            levels elevated.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 xl:mx-20 mx-4 sm:px-10 px-4">
          <FoodItem image="food1.jpeg" />
          <FoodItem image="food2.jpeg" />
          <FoodItem image="food3.jpeg" />
          <FoodItem image="food4.jpeg" />
          <FoodItem image="food5.jpeg" />
          <FoodItem image="food6.jpeg" />
        </div>
      </main>
    </div>
  );
}

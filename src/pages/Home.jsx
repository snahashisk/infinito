import React from "react";
import mainImgae from "../images/image-1.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  return (
    <section className="w-full h-screen relative font-sans bg-black bg-opacity-30 pt-24">
      <img
        src={mainImgae}
        alt="logo"
        className="w-full absolute top-0 right-0 h-screen -z-50"
      />
      <div className="flex w-full px-6">
        <div className="px-16 py-8">
          <h1 className="text-9xl w-1/2 font-extrabold py-6 text-yellow-400 text-shadow-lg font-cursive">
            INFINITO
          </h1>
          <h1 className="text-white text-6xl w-2/3 font-semibold">
            THE BEST TECHFEST IN KOLKATA
          </h1>
          <p className="text-gray-200 py-8 w-3/4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aperiam accusamus, dolorem optio dolor doloribus? Quibusdam
            molestiae quo sint dolores illo possimus, facere quis minus
            provident harum at mollitia ab atque minima aspernatur nesciunt!
          </p>
          <button className="bg-yellow-400 text-black py-2 px-6 rounded-full font-medium hover:scale-110 duration-150 flex items-center gap-1 hover:shadow-lg">
            EXPLORE MORE
            <BiRightArrowAlt className="text-2xl" />
          </button>
        </div>
        <div className="text-white w-full pt flex flex-col justify-end items-end pr-16 gap-2">
          <h1 className="text-fuchsia-400 text-5xl font-semibold">
            TO BE ANNOUNCED
          </h1>
          <p className="text-lg">
            Thakurpukur, Samali, B.H Road Kolkata : 700104
          </p>
          <button className="py-2 px-4 border-2 rounded-lg border-yellow-400 text-yellow-400 text-xl mt-4 hover:bg-yellow-400 hover:text-gray-800 duration-150">
            BUY TICKET
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
import React from "react";
import js from "../assets/javascript.png";
import css from "../assets/css3.png";
import node from "../assets/node.png";
import html from "../assets/html.png";
import { Link } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <h1 className="font-nunito text-4xl text-center mt-16">Hello</h1>
      <Search />
      <div className="grid grid-cols-2 border-4 justify-center items-center mt-20 gap-10 md:grid-cols-4">
        <Link to="/javascript">
          <div className="border-2 flex flex-col items-center w-6/12 hover:border-orange-600">
            <img src={js} alt="" />{" "}
            <h3 className="text-center text-2xl pt-4 font-nunito">JavaScript</h3>
          </div>
        </Link>
        <div className="border-2 flex flex-col items-center w-6/12 hover:border-orange-600">
          <img src={css} alt="" />{" "}
          <h3 className="text-center text-2xl pt-4 font-nunito">CSS</h3>
        </div>
        <div className="border-2 flex flex-col items-center w-6/12 hover:border-orange-600">
          <img src={node} alt="" />{" "}
          <h3 className="text-center text-2xl pt-4 font-nunito">NodeJS</h3>
        </div>
        <div className="border-2 flex flex-col items-center w-6/12 hover:border-orange-600">
          <img src={html} alt="" />{" "}
          <h3 className="text-center text-2xl pt-4 font-nunito">HTML</h3>
        </div>
      </div>
    </>
  );
};

export default Home;

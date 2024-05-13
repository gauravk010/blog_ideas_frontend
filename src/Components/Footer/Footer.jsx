import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaSquareFacebook,
  FaSquarePinterest,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="min-[990px]:flex-row min-[990px]:justify-between min-[990px]:items-start text-white min-h-52 gap-10 py-20 flex flex-col ">
      <div className="min-[990px]:w-[40%] max-min-[990px]:border-b max-min-[990px]:border-[#383444] max-min-[990px]:pb-10">
        <h1 className="text-3xl font-bold cursor-pointer">BLOG IDEAS</h1>
        <p className="text-sm text-justify mt-6 min-[990px]:w-[80%] text-[#b1b0b7]">
          Blog Ideas Blogger enhances blogging with smooth design and versatile
          features, providing a user-friendly experience for Bloggers.
        </p>
        <div className="mt-6 flex gap-2">
          <FaSquareFacebook className="text-3xl cursor-pointer hover:-translate-y-1.5 transition-transform delay-[.7] ease-in-out" />
          <FaSquarePinterest className="text-3xl cursor-pointer hover:-translate-y-1.5 transition-transform delay-[.7] ease-in-out" />
          <FaSquareXTwitter className="text-3xl cursor-pointer hover:-translate-y-1.5 transition-transform delay-[.7] ease-in-out" />
          <FaLinkedin className="text-3xl cursor-pointer hover:-translate-y-1.5 transition-transform delay-[.7] ease-in-out" />
        </div>
      </div>
      <div className="min-[990px]:w-[20%] max-min-[990px]:border-b max-min-[990px]:border-[#383444] max-min-[990px]:pb-10">
        <h1 className="text-xl">Useful Links</h1>
        <ul className="mt-6 text-[#b1b0b7]">
          <li className="mt-6">
            <Link
              to={"/"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Home</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={"/about"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>About</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={"/contact"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Contact</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100">
              <FaChevronRight />
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="min-[990px]:w-[20%] max-min-[990px]:border-b max-min-[990px]:border-[#383444] max-min-[990px]:pb-10">
        <h1 className="text-xl">Useful Links</h1>
        <ul className="mt-6 text-[#b1b0b7]">
          <li className="mt-6">
            <Link
              to={"/"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Home</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={"/about"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>About</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={"/contact"}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Contact</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100">
              <FaChevronRight />
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="min-[990px]:w-[20%] ">
        <h1 className="text-xl">Categories</h1>
        <ul className="mt-6 text-[#b1b0b7]">
          <li className="mt-6">
            <Link
              to={`/?category=health`}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Health</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={`/?category=fashion`}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Fashion</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={`/?category=food`}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Food</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={`/?category=travel`}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Travel</span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              to={`/?category=sports`}
              className="flex items-center gap-2 hover:text-red-500 transition ease-out delay-100"
            >
              <FaChevronRight />
              <span>Sports</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-white min-h-52 gap-10 py-20">
      <div className="w-[40%]">
        <h1 className="text-3xl font-bold">BLOG IDEAS</h1>
        <p className="text-sm text-justify mt-6 w-[60%] text-[#b1b0b7]">
          TNC Blogger enhances blogging with smooth design and versatile
          features, providing a user-friendly experience for Bloggers. Get this
          TNC Blogger Webflow Blog template now!
        </p>
        <div className="mt-6 flex gap-2">
          icons
        </div>
      </div>
      <div className="w-[20%]">
        <h1 className="text-xl">Useful Links</h1>
        <ul className="mt-6 text-[#b1b0b7]">
          <li className="mt-6">
            <Link>Home</Link>
          </li>
          <li className="mt-6">
            <Link>Ablout</Link>
          </li>
          <li className="mt-6">
            <Link>Contact</Link>
          </li>
          <li className="mt-6">
            <Link>Help</Link>
          </li>
        </ul>
      </div>
      <div className="w-[20%]">
        <h1 className="text-xl">Useful Links</h1>
        <ul className="mt-6 text-[#b1b0b7]">
          <li className="mt-6">
            <Link>Home</Link>
          </li>
          <li className="mt-6">
            <Link>Ablout</Link>
          </li>
          <li className="mt-6">
            <Link>Contact</Link>
          </li>
          <li className="mt-6">
            <Link>Help</Link>
          </li>
        </ul>
      </div>
      <div className="w-[20%]">
        <h1 className="text-xl">Recent Posts</h1>
      </div>
    </footer>
  );
};

export default Footer;

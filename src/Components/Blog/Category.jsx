import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="border text-white border-[#383444] rounded-sm">
      <h1 className="bg-[#383444] p-4">CATEGORIES</h1>
      <div className="bg-black min-h-52 flex flex-col px-8 py-8">
        <Link to={`/?category=fashion`} className="hover:text-red-500 transition ease-out delay-100 border-b pb-2 border-[#383444]">
          Fashion
        </Link>
        <Link to={`/?category=food`} className="hover:text-red-500 transition ease-out delay-100 mt-4 pb-2 border-b border-[#383444]">
          Food
        </Link>
        <Link to={`/?category=travel`} className="hover:text-red-500 transition ease-out delay-100 mt-4 pb-2 border-b border-[#383444]">
          Travel
        </Link>
        <Link to={`/?category=sports`} className="hover:text-red-500 transition ease-out delay-100 mt-4 pb-2 border-b border-[#383444]">
          Sports
        </Link>
      </div>
    </div>
  );
};

export default Category;

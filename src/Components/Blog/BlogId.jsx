import React, { useContext, useEffect } from "react";
import Category from "./Category";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import { BASE_URL } from "../Context/helper";

const BlogId = () => {
  const { id } = useParams();
  const context = useContext(BlogContext);
  const { fetchBlogByID, BlogByID } = context;

  useEffect(() => {
    fetchBlogByID(id);
    console.log(BlogByID);
  }, []);

  const fromatDate = (date) => {
    const formDate = new Date(date);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = formDate.getDate();
    const month = months[formDate.getMonth()];
    const year = formDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <div className="flex mt-16 gap-8">
        <div className="flex-1">
          <div className="border text-white border-[#383444] rounded-sm overflow-hidden">
            <img
              className="h-[600px] w-full object-cover"
              src={`${BASE_URL}/uploads/${BlogByID.blog_img}`}
              alt=""
            />
            <div className="p-10">
              <div className="flex gap-2 items-center mb-3">
                <p className="text-[#b1b0b7]">{BlogByID.author}</p>
                <p className="text-[#b1b0b7]">{fromatDate(BlogByID.date)}</p>
                <p className="bg-[#383444] rounded-full px-3 py-2  hover:bg-red-500 transition ease-out delay-100">
                  {BlogByID.blog_category}
                </p>
              </div>
              <h1 className="text-2xl font-bold">{BlogByID.blog_title}</h1>
              <p className="mt-2">{BlogByID.blog_desc}</p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <Category />
        </div>
      </div>
    </>
  );
};

export default BlogId;

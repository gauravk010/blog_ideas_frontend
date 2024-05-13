import React, { useContext, useEffect } from "react";
import Category from "./Category";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import { BASE_URL } from "../Context/helper";
import { Spinner } from "../Common/Spinner";

const BlogId = () => {
  const { id } = useParams();
  const context = useContext(BlogContext);
  const { fetchBlogByID, BlogByID } = context;

  useEffect(() => {
    fetchBlogByID(id);
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
      <div className="flex flex-col mt-10 sm:mt-16 gap-8 min-[990px]:flex-row">
        <div className="flex-1">
          {BlogByID.author ? (
            <div className="border text-white border-[#383444] rounded-sm overflow-hidden">
              <img
                className="sm:h-[600px] h-[300px] w-full object-cover"
                src={`${BASE_URL}/uploads/${BlogByID.blog_img}`}
                alt=""
              />
              <div className="p-5 sm:p-10">
                <div className="flex gap-2 items-center mb-3">
                  <p className="text-[#b1b0b7]">{BlogByID.author}</p>
                  <p className="text-[#b1b0b7]">{fromatDate(BlogByID.date)}</p>
                  <p className="bg-[#383444] rounded-full px-3 py-2  hover:bg-red-500 transition ease-out delay-100">
                    <Link to={`/?category=${BlogByID.blog_category}`}>
                      {BlogByID.blog_category}
                    </Link>
                  </p>
                </div>
                <h1 className="text-2xl font-bold">{BlogByID.blog_title}</h1>
                <p className="mt-2">{BlogByID.blog_desc}</p>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
        <div className="w-full min-[990px]:w-[30%]">
          <Category />
        </div>
      </div>
    </>
  );
};

export default BlogId;

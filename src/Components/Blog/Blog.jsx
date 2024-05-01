import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Context/helper";

const Blog = ({ blogs }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
        {blogs.length ? (
          blogs.map((item) => {
            return (
              <div
                key={item._id}
                className="border flex flex-col text-white border-[#383444] rounded-sm overflow-hidden"
              >
                <div className="h-1/2">
                  <img
                    className="h-[300px] w-full"
                    src={`${BASE_URL}/uploads/${item.blog_img}`}
                    alt={"blog image"}
                  />
                </div>
                <div className="h-1/2 p-6 bg-black">
                  <div className="text-sm  flex gap-2 items-center">
                    <p className="text-[#b1b0b7]">{item.date}</p>
                    <Link className="bg-[#383444] rounded-full px-3 py-2  hover:bg-red-500 transition ease-out delay-100">
                      {item.blog_category}
                    </Link>
                  </div>
                  <div className="min-h-32 border-b pb-4 border-[#383444]">
                    <Link to={`/blog/${item._id}`}>
                      <h1 className="text-2xl font-bold mt-2 hover:text-red-500 transition ease-out delay-100">
                        {item.blog_title}
                      </h1>
                    </Link>
                    <p className="text-sm text-[#b1b0b7] mt-2 ">
                      {item.blog_desc}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/blog/${item._id}`} className="text-red-500 ">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center text-4xl text-white">No data found!</h1>
        )}
      </div>
    </div>
  );
};
export default Blog;

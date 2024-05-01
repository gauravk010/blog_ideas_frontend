import React, { useContext, useEffect, useState } from "react";
import "./write.css";
import { BlogContext } from "../Context/BlogContext";
import Category from "../Blog/Category";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Context/helper";

const Write = () => {
  const context = useContext(BlogContext);
  const { Userblogs, fetchOnlyUser, DeleteBlog, AddBlog } = context;
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      fetchOnlyUser();
      console.log(Userblogs);
    }
  }, [refresh]);

  const [blog, setBlog] = useState({
    blog_title: "",
    blog_desc: "",
    blog_category: "",
  });

  const [files, setFiles] = useState("");

  const onchange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const blogForm = (e) => {
    e.preventDefault();
    setrefresh(true);
    console.log(files);
    console.log(blog);
    AddBlog(blog.blog_title, blog.blog_desc, blog.blog_category, files);
  };

  return (
    <div className="flex mt-16 gap-8 text-white">
      <div className="flex-1">
        <form className="mt-8" onSubmit={blogForm}>
          <div className="">
            <div className="flex flex-col w-full">
              <label htmlFor="title">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                type="text"
                name="blog_title"
                value={blog.blog_title}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col w-full">
              <label htmlFor="mobile">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                name="blog_desc"
                cols="30"
                rows="5"
                value={blog.blog_desc}
                onChange={onchange}
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col w-full">
              <label htmlFor="category">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                name="blog_category"
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                onChange={onchange}
                value={blog.blog_category}
              >
                <option value="general">General</option>
                <option value="sports">Sports</option>
                <option value="fashion">Fashion</option>
                <option value="health">Health</option>
                <option value="good">Food</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col w-full">
              <label htmlFor="image">
                Image<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="image"
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                onChange={(e) => setFiles(e.target.files[0])}
              />
            </div>
          </div>
          <button className="bg-red-500 py-4 px-6 rounded-full mt-8">
            Submit Now
          </button>
        </form>
        <div className="mt-8">
          {Userblogs.length > 0 &&
            Userblogs.map((item) => {
              return (
                <div
                  key={item._id}
                  className="border flex text-white border-[#383444] rounded-sm overflow-hidden mt-6"
                >
                  <div className="w-3/5 min-h-72">
                    <img
                      className="h-[300px] w-full"
                      src={`${BASE_URL}/uploads/${item.blog_img}`}
                      alt={"blog"}
                    />
                  </div>
                  <div className="w-3/5 p-6 bg-black min-h-72">
                    <div className="text-sm  flex gap-2 items-center">
                      <p className="text-[#b1b0b7]">{item.date}</p>
                      <Link className="bg-[#383444] rounded-full px-3 py-2  hover:bg-red-500 transition ease-out delay-100">
                        {item.blog_category}
                      </Link>
                    </div>
                    <div className="min-h-36 border-b pb-4 border-[#383444]">
                      <Link to={`/blog/${item._id}`}>
                        <h1 className="text-2xl font-bold mt-2 hover:text-red-500 transition ease-out delay-100">
                          {item.blog_title}
                        </h1>
                      </Link>
                      <p className="text-sm text-[#b1b0b7] mt-2 ">
                        {item.blog_desc}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Link to={`/blog/${item._id}`} className="text-red-500 ">
                        Read More
                      </Link>
                      <div className="flex items-center gap-2">
                        <Link to={`/update-blog/${item._id}`}>
                          <FiEdit className="text-red-500 text-xl" />
                        </Link>
                        <MdDelete
                          onClick={() => DeleteBlog(item._id)}
                          className="text-red-500 text-xl cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="w-[30%]">
        <Category />
      </div>
    </div>
  );
};

export default Write;

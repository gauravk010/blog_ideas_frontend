import React, { useContext, useEffect, useState } from "react";
import "./write.css";
import { BlogContext } from "../Context/BlogContext";
import Category from "../Blog/Category";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Context/helper";
import * as yup from "yup";

const Write = () => {
  const context = useContext(BlogContext);
  const { Userblogs, fetchOnlyUser, DeleteBlog, AddBlog, IsAdded, IsLoading } =
    context;
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      window.scroll({ top: 0, behavior: "smooth" });
      fetchOnlyUser();
    }
  }, [IsAdded]);

  const [Error, setError] = useState({});
  const schema = yup.object({
    blog_title: yup.string().required("Title is required"),
    blog_desc: yup.string().required("Description is required"),
    blog_category: yup.string().required("Category is required"),
    blog_img: yup.string().required("Image is required"),
  });

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

  const [blog, setBlog] = useState({
    blog_title: "",
    blog_desc: "",
    blog_category: "",
  });

  const [files, setFiles] = useState("");
  const [Preview, setPreview] = useState("");

  const onchange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const blogForm = async (e) => {
    e.preventDefault();
    try {
      let data = { ...blog, blog_img: files };
      await schema.validate(data, { abortEarly: false });
      AddBlog(blog.blog_title, blog.blog_desc, blog.blog_category, files);
      setBlog({ blog_title: "", blog_desc: "", blog_category: "" });
      setFiles("");
      setPreview("");
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
  };

  return (
    <div className="flex flex-col mt-10 sm:mt-16 gap-8 min-[990px]:flex-row text-white">
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
              <p className="mt-2">{Error ? Error.blog_title : ""}</p>
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
              <p className="mt-2">{Error ? Error.blog_desc : ""}</p>
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
                <option value="">Select</option>
                <option value="health">Health</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="sports">Sports</option>
              </select>
              <p className="mt-2">{Error ? Error.blog_category : ""}</p>
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
                onChange={(e) => {
                  setFiles(e.target.files[0]);
                  if (e.target.files[0]) {
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  } else {
                    setPreview("");
                  }
                }}
              />
              {Preview && (
                <div className="mt-2">
                  <img
                    className="w-80 rounded-md h-52 object-cover"
                    src={Preview}
                    alt="Preview"
                  />
                </div>
              )}
              <p className="mt-2">{Error ? Error.blog_img : ""}</p>
            </div>
          </div>
          <button
            className="bg-red-500 py-4 px-6 rounded-full mt-8 hover:bg-red-400"
            disabled={IsLoading ? true : false}
          >
            {IsLoading ? "Loading" : "Submit Now"}
          </button>
        </form>
        <div className="mt-8">
          {Userblogs.length > 0 ? (
            Userblogs.map((item) => {
              return (
                <div
                  key={item._id}
                  className="border flex flex-col sm:flex-row text-white border-[#383444] rounded-sm overflow-hidden mt-6"
                >
                  <div className="sm:w-3/5 sm:min-h-72">
                    <img
                      className="h-[250px] sm:h-[300px] w-full object-cover"
                      src={`${BASE_URL}/uploads/${item.blog_img}`}
                      alt={"blog"}
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 bg-black sm:min-h-72">
                    <div className="text-sm  flex gap-2 items-center">
                      <p className="text-[#b1b0b7]">{fromatDate(item.date)}</p>
                      <Link className="bg-[#383444] rounded-full px-3 py-2  hover:bg-red-500 transition ease-out delay-100">
                        {item.blog_category}
                      </Link>
                    </div>
                    <div className="min-h-36 border-b pb-4 border-[#383444]">
                      <Link to={`/blog/${item._id}`}>
                        <h1 className="text-2xl font-bold mt-2 hover:text-red-500 transition ease-out delay-100 line-clamp-2">
                          {item.blog_title}
                        </h1>
                      </Link>
                      <p className="text-sm text-[#b1b0b7] mt-2 line-clamp-2">
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
            })
          ) : (
            <div className="text-center text-2xl">Write your first Blog!</div>
          )}
        </div>
      </div>
      <div className="w-full min-[990px]:w-[30%]">
        <Category />
      </div>
    </div>
  );
};

export default Write;

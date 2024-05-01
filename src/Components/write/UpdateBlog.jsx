import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import Category from "../Blog/Category";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Context/helper";

const UpdateBlog = () => {
  const { id } = useParams();
  const context = useContext(BlogContext);
  const { EditBlog } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      fetchUserBlogByID(id);
    }
  }, []);

  const [files, setFiles] = useState("");
  const [blog, setBlog] = useState({
    id: "",
    blog_title: "",
    blog_desc: "",
    blog_category: "",
  });

  const fetchUserBlogByID = (id) => {
    let config = {
      headers: {
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios.get(`${BASE_URL}/fetchuserblog/${id}`, config).then((res) => {
      setBlog({
        id: res.data._id,
        blog_title: res.data.blog_title,
        blog_desc: res.data.blog_desc,
        blog_category: res.data.blog_category,
      });
      setFiles(res.data.blog_img);
      console.log("BlogperId", res.data);
    });
  };

  //   const UpdateBlog = () => {
  //     setBlog({
  //       id: UserBlogByID._id,
  //       blog_title: UserBlogByID.blog_title,
  //       blog_desc: UserBlogByID.blog_desc,
  //       blog_category: UserBlogByID.blog_category,
  //     });
  //     setFiles(UserBlogByID.blog_img);
  //   };

  const submitBLog = (e) => {
    e.preventDefault();
    console.log(blog);
    console.log(files);
    EditBlog(
      blog.id,
      blog.blog_title,
      blog.blog_desc,
      blog.blog_category,
      files
    );
    navigate("/");
  };

  const onchange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex mt-16 gap-8 text-white">
      <div className="flex-1">
        <form className="mt-8" onSubmit={submitBLog}>
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
      </div>
      <div className="w-[30%]">
        <Category />
      </div>
    </div>
  );
};

export default UpdateBlog;

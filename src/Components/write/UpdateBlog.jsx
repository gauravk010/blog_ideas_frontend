import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import Category from "../Blog/Category";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Context/helper";
import * as yup from "yup";

const UpdateBlog = () => {
  const { id } = useParams();
  const context = useContext(BlogContext);
  const { EditBlog, IsLoading } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      window.scroll({ top: 0, behavior: "smooth" });
      fetchUserBlogByID(id);
    }
  }, []);
  const [Error, setError] = useState({});
  const schema = yup.object({
    blog_title: yup.string().required("Title is required"),
    blog_desc: yup.string().required("Description is required"),
    blog_category: yup.string().required("Category is required"),
    blog_img: yup.string().required("Image is required"),
  });

  const [files, setFiles] = useState("");
  const [Preview, setPreview] = useState("");
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
    });
  };

  const submitBLog = async (e) => {
    e.preventDefault();
    try {
      let data = { ...blog, blog_img: files };
      await schema.validate(data, { abortEarly: false });
      EditBlog(
        blog.id,
        blog.blog_title,
        blog.blog_desc,
        blog.blog_category,
        files
      );
      navigate("/write");
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
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
                <option value="sports">Sports</option>
                <option value="fashion">Fashion</option>
                <option value="health">Health</option>
                <option value="good">Food</option>
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
              {Preview ? (
                <div className="mt-2">
                  <img
                    className="w-80 rounded-md h-52 object-cover"
                    src={Preview}
                    alt="Preview"
                  />
                </div>
              ) : (
                files && (
                  <div className="mt-2">
                    <img
                      className="w-80 rounded-md h-52 object-cover"
                      src={`${BASE_URL}/uploads/${files}`}
                      alt="fetched"
                    />
                  </div>
                )
              )}
              <p className="mt-2">{Error ? Error.blog_img : ""}</p>
            </div>
          </div>
          <button
            className="bg-red-500 py-4 px-6 rounded-full mt-8"
            disabled={IsLoading ? true : false}
          >
            {IsLoading ? "Loading" : "Submit Now"}
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

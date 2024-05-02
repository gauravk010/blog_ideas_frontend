import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "./helper";

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [Userblogs, setUserBlogs] = useState([]);
  const [BlogByID, setBlogByID] = useState([]);
  const [blogsCate, setBlogsCate] = useState([]);
  const [user, setUser] = useState("");
  const [Islogin, setIslogin] = useState(false);
  const [IsAdded, setIsAdded] = useState(0);
  const [IsLoading, setIsLoading] = useState(false);

  const fetchAll = () => {
    // let config = {
    //     header: {
    //         "Content-Type": "application/json",
    //         "authtoken": localStorage.getItem('authtoken')
    //     }
    // }

    axios.get(`${BASE_URL}/fetchall`).then((res) => {
      setBlogs(res.data);
    });
  };

  const fetchByCategory = (querry) => {
    axios.get(`${BASE_URL}/fetchByCategory?category=${querry}`).then((res) => {
      setBlogs(res.data);
    });
  };

  const fetchOnlyUser = () => {
    let config = {
      headers: {
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios.get(`${BASE_URL}/fetchUser`, config).then((res) => {
      setUserBlogs(res.data);
      // console.log("user", res.data);
    });
  };

  const fetchBlogByID = (id) => {
    let config = {
      headers: {
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios.get(`${BASE_URL}/fetchblog/${id}`, config).then((res) => {
      setBlogByID(res.data);
      // console.log("BlogperId", res.data);
    });
  };

  const fetchUser = () => {
    let config = {
      headers: {
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios.get(`${BASE_URL}/getuser`, config).then((res) => {
      setUser(res.data.fullname);
    });
  };

  const fetcBlogsCate = (category) => {
    axios.get(`${BASE_URL}/category/${category}`).then((res) => {
      // console.log(res.data);
      setBlogsCate(res.data);
    });
  };

  const DeleteBlog = (id) => {
    let config = {
      headers: {
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios.delete(`${BASE_URL}/delete/${id}`, config).then((res) => {
      // console.log(res.data);
    });

    const newBlogs = Userblogs.filter((blog) => {
      return blog._id !== id;
    });
    setUserBlogs(newBlogs);
  };

  const AddBlog = (title, description, category, file) => {
    setIsLoading(true);
    let data = {
      blog_title: title,
      blog_desc: description,
      blog_category: category,
      files: file,
    };

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios
      .post(`${BASE_URL}/upload`, data, config)
      .then((res) => {
        // console.log(res.data);
        setIsAdded(IsAdded + 1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const EditBlog = (id, title, description, category, file) => {
    let data = {
      blog_title: title,
      blog_desc: description,
      blog_category: category,
      files: file,
    };

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authtoken: localStorage.getItem("authtoken"),
      },
    };

    axios
      .put(`${BASE_URL}/update/${id}`, data, config)
      .then((res) => {
        // console.log(res.data);
        setIsAdded(IsAdded + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        Userblogs,
        fetchAll,
        fetchOnlyUser,
        DeleteBlog,
        AddBlog,
        EditBlog,
        fetchUser,
        user,
        setUser,
        fetcBlogsCate,
        blogsCate,
        fetchBlogByID,
        BlogByID,
        fetchByCategory,
        Islogin,
        setIslogin,
        IsAdded,
        setIsAdded,
        IsLoading,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

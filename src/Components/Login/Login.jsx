import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Context/helper";
import { BlogContext } from "../Context/BlogContext";
import * as yup from "yup";

export const Login = () => {
  const context = useContext(BlogContext);
  const { setIslogin } = context;
  const [Error, setError] = useState({});
  const schema = yup.object({
    email: yup
      .string()
      .required("Please enter the email")
      .email("Invalid email format"),
    password: yup.string().required("Please enter the password"),
  });

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(state, { abortEarly: false });
      setState({
        email: "",
        password: "",
      });

      let data = {
        email: state.email,
        password: state.password,
      };

      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(`${BASE_URL}/login`, data, config)
        .then((res) => {
          if (res.data.success) {
            // saving auth token
            localStorage.setItem("authtoken", res.data.token);
            setIslogin(true);
            navigate("/");
          }
        })
        .catch((err) => {
          setError({ invalid: err.response.data.error });
        });
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
  };
  return (
    <div className="flex flex-col mt-10 sm:mt-16 gap-8 text-white sm:w-[400px] mx-auto border border-[#383444] rounded-sm px-8 py-8">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form className="mt-4  w-full" onSubmit={login}>
        <div className="flex mt-4 flex-col w-full">
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
            type="email"
            name="email"
            value={state.email}
            onChange={onchange}
          />
          <p className="mt-2">{Error ? Error.email : ""}</p>
        </div>
        <div className="flex  mt-4 flex-col w-full">
          <label htmlFor="password">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
            type="password"
            name="password"
            value={state.password}
            onChange={onchange}
          />
          <p className="mt-2"> {Error ? Error.password : ""}</p>
        </div>
        {Error ? Error.invalid : ""}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 py-4 px-6 rounded-full mt-8"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        Doesn't have an account ?{" "}
        <Link to={"/signup"} className="text-red-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

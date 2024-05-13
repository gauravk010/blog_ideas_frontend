import React, { useContext, useEffect } from "react";
import "./home.css";
import { BlogContext } from "../Context/BlogContext";
import Blog from "../Blog/Blog";
import Category from "../Blog/Category";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const querry = searchParams.get("category");
  const context = useContext(BlogContext);
  const { fetchByCategory, blogs, fetchAll } = context;

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    if (querry) {
      fetchByCategory(querry);
    } else {
      fetchAll();
    }
  }, [querry]);

  return (
    <>
      <div className="flex flex-col mt-10 sm:mt-16 gap-8 min-[990px]:flex-row">
        <div className="flex-1">
          <Blog blogs={blogs} />
        </div>
        <div className="w-full min-[990px]:w-[30%]">
          <Category />
        </div>
      </div>
    </>
  );
};

export default Home;

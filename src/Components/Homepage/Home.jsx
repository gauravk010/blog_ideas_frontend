import React, { useContext, useEffect } from "react";
import "./home.css";
import { BlogContext } from "../Context/BlogContext";
import Blog from "../Blog/Blog";
import Category from "../Blog/Category";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  const querry = searchParams.get("category");
  const context = useContext(BlogContext);
  const { fetchByCategory, blogs, fetchAll } = context;

  useEffect(() => {
    if (querry) {
      fetchByCategory(querry);
    } else {
      fetchAll();
    }
  }, [querry]);

  console.log(blogs);
  // category code
  // const [blogItems, setBlogItems] = useState(data)
  // const allCategories = ['All', ...new Set(blogs.map(item => item.blog_category))];
  // const [buttons, setButtons] = useState(allCategories)

  // const filter = (categ) => {
  //     if (categ === 'All') {
  //         setBlogItems(blogs);
  //         return;
  //     }
  //     const filteredData = blogs.filter(items => items.blog_category === categ)
  //     setBlogItems(filteredData)
  // }

  return (
    <>
      {/* <Featured /> */}
      <div className="flex mt-16 gap-8">
        <div className="flex-1">
          <Blog blogs={blogs} />
        </div>
        <div className="w-[30%]">
          <Category />
        </div>
      </div>
    </>
  );
};

export default Home;

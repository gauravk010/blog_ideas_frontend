import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/SingUp/Signup";
import Contact from "./Components/Contact/Contact";
import { About } from "./Components/About/About";
import PrivateComp from "./Components/PrivateComp";
import Write from "./Components/write/Write";
import { BlogContextProvider } from "./Components/Context/BlogContext";
import More from "./Components/Read more/More";
import BlogId from "./Components/Blog/BlogId";
import UpdateBlog from "./Components/write/UpdateBlog";

function App() {
  return (
    <BlogContextProvider>
      <BrowserRouter>
        <div className="w-[95%] mx-auto  xl:w-[80%] 2xl:w-[70%]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateComp />}>
              <Route path="/write" element={<Write />} />
            </Route>
            <Route path="/blog" element={<More />} />
            <Route path="/blog/:id" element={<BlogId />} />
            <Route path="/update-blog/:id" element={<UpdateBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <div className="border-b border-t border-[#383444] mt-20">
          <div className="xl:w-[80%] 2xl:w-[70%] w-[95%] mx-auto ">
            <Footer />
          </div>
        </div>
        <div className="text-[#b1b0b7] text-center py-10">
          Copyright © 2024 Blog Ideas
        </div>
      </BrowserRouter>
    </BlogContextProvider>
  );
}

export default App;

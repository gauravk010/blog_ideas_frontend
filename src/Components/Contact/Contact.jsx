import React, { useEffect } from "react";
import Category from "../Blog/Category";

const Contact = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex mt-16 gap-8">
      <div className="flex-1 text-white">
        <div>
          <h1 className="text-5xl font-bold">Get in touch</h1>
        </div>
        <form className="mt-8" action="">
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex gap-6 justify-between mt-8">
            <div className="flex flex-col w-full">
              <label htmlFor="mobile">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                type="text"
                name="mobile"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="subject">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                type="text"
                name="subject"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col w-full">
              <label htmlFor="mobile">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                className="mt-2 rounded-sm bg-[#020116] border border-[#383444] px-2 py-4"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
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

export default Contact;

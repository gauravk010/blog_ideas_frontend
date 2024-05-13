import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { BlogContext } from "../Context/BlogContext";
import { Menu, Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const context = useContext(BlogContext);
  const { fetchUser, user, setUser, Islogin, setIslogin } = context;
  const [Show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      fetchUser();
    }
  }, [Islogin]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authtoken");
    setUser("");
    setIslogin(false);
    navigate("/login");
  };

  return (
    <nav className="bg-[#020116] text-white">
      <div className="flex h-20 items-center justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="text-3xl font-black">BLOG IDEAS</h1>
          </Link>
        </div>
        <div className="hidden min-[990px]:block">
          <div className="min-[990px]:flex min-[990px]:gap-4 min-[990px]:items-center min-[990px]:text-base">
            <Link
              to={"/"}
              className="hover:text-red-500 transition ease-out delay-100"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="hover:text-red-500 transition ease-out delay-100"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-red-500 transition ease-out delay-100"
            >
              Contact
            </Link>
            <Link
              to={"/write"}
              className="hover:text-red-500 transition ease-out delay-100"
            >
              Write
            </Link>
            <div>
              {user ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-sm bg-black/20 border border-[#383444] px-4 py-2 text-sm font-medium text-white hover:bg-[#383444] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                      {user}
                      <IoMdArrowDropdown
                        className="-mr-1 ml-2 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-white/10 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[#383444] text-white"
                                  : "text-white"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Profile
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[#383444] text-white"
                                  : "text-white"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={logout}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  to={"/login"}
                  className="border rounded-sm border-[#383444] px-4 py-2 text-sm font-medium text-white hover:bg-[#383444]"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="min-[990px]:hidden block ">
          <RxHamburgerMenu
            className="text-red-500 text-2xl cursor-pointer"
            onClick={() => setShow(!Show)}
          />
        </div>
      </div>
      <div
        className={`${
          Show ? " h-[300px]" : "h-[0px] "
        }  h-[0px] transition-[height] min-[990px]:hidden block ease-in-out duration-150`}
      >
        <div
          className={`${
            Show ? " block" : "hidden"
          } flex flex-col gap-4 items-center text-lg py-4`}
        >
          <Link
            to={"/"}
            onClick={() => setShow(!Show)}
            className="hover:text-red-500 transition ease-out delay-100"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            onClick={() => setShow(!Show)}
            className="hover:text-red-500 transition ease-out delay-100"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setShow(!Show)}
            className="hover:text-red-500 transition ease-out delay-100"
          >
            Contact
          </Link>
          <Link
            to={"/write"}
            onClick={() => setShow(!Show)}
            className="hover:text-red-500 transition ease-out delay-100"
          >
            Write
          </Link>
          {user ? (
            <>
              <Link
                // to={"/profile"}
                onClick={() => setShow(!Show)}
                className="  text-lg  font-medium text-white hover:text-red-500 transition ease-out delay-100"
              >
                {user}
              </Link>
              <button
                onClick={() => {
                  logout();
                  setShow(!Show);
                }}
                className="border rounded-sm border-[#383444] px-4 py-2  text-lg  font-medium text-white hover:bg-[#383444]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              onClick={() => setShow(!Show)}
              className="border rounded-sm border-[#383444] px-4 py-2  text-lg  font-medium text-white hover:bg-[#383444]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

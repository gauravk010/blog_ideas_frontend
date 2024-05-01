import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { BlogContext } from "../Context/BlogContext";
import { Menu, Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const context = useContext(BlogContext);
  const { fetchUser, user } = context;
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      fetchUser();
    }
  }, [user]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authtoken");
    navigate("/login");
  };

  return (
    // <nav
    //   className="navbar navbar-expand-lg navbar-dark bg-dark"
    //   style={{ height: "70px" }}
    // >
    //   <div className="container-fluid">
    //     <Link className="navbar-brand fs-4" to="/">
    //       Blog Ideas
    //     </Link>
    //     <button
    //       className="navbar-toggler ms-auto"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
    //         <li className="nav-item fw-normal">
    //           <Link
    //             className="nav-link text-white fs-5 texthover"
    //             aria-current="page"
    //             to="/"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link active fs-5"
    //             aria-current="page"
    //             to="/about"
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link active fs-5"
    //             aria-current="page"
    //             to="/write"
    //           >
    //             Write
    //           </Link>
    //         </li>
    //       </ul>
    //       {
    //         !localStorage.getItem("authtoken") ? (
    //           <>
    //             <Link
    //               className="btn btn-outline-light fs-5"
    //               aria-current="page"
    //               to="/login"
    //             >
    //               Login
    //             </Link>
    //             <Link
    //               className="btn btn-outline-light mx-2 fs-5"
    //               aria-current="page"
    //               to="/signup"
    //             >
    //               Sign Up
    //             </Link>
    //           </>
    //         ) : (
    //           <div className="navbar-nav dropdown">
    //             <button
    //               className="btn btn-dark btn-sm dropdown-toggle btn-outline-light fs-3"
    //               type="button"
    //               data-bs-toggle="dropdown"
    //             >
    //               {user}
    //             </button>
    //             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
    //               <li>
    //                 <Link
    //                   className="dropdown-item"
    //                   aria-current="page"
    //                   onClick={logout}
    //                   to="/login"
    //                 >
    //                   Logout
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         )

    //         // <Link className="dropdown btn btn-outline-light fs-5" aria-current="page" onClick={logout} to="/login">Logout - {user}</Link>
    //       }
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex bg-[#020116] text-white h-20 items-center justify-between">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-black">BLOG IDEAS</h1>
        </Link>
      </div>
      <div>
        <div className="flex gap-4 items-center text-base">
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
                              active ? "bg-[#383444] text-white" : "text-white"
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
                              active ? "bg-[#383444] text-white" : "text-white"
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
    </nav>
  );
};

export default Header;

// import React, { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         Toggle Sidebar
//       </button>
//       <ul>
//         <li>
//           <a href="">Home</a>
//         </li>
//         <li>
//           <a href="">Home</a>
//         </li>
//         <li>
//           <a href="">Home</a>
//         </li>
//         <li>
//           <a href="">Home</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import "./Sidebar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FaArrowPointer } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="nav1">
        <div className="side-nav1">
          <div className="img">
            <span>SSS</span>
          </div>
          <div className="name">
            <h3>Anupam</h3>
            <span>Visit store</span>
          </div>
          <IoIosArrowDown />
        </div>
        <div className="side-nav2">
          <div className="home">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="orders">
            <FaListAlt />
            <span>Orders</span>
          </div>
          <div className="products">
            <FaList />
            <span>Products</span>
          </div>
          <div className="delivery">
            <TbTruckDelivery />
            <span>Delivery</span>
          </div>
          <div className="marketing">
            <AiFillSound />
            <span>Marketing</span>
          </div>
          <div className="analytics">
            <FaHome />
            <span>Analytics</span>
          </div>
          <div className="payments">
            <MdOutlinePayments />
            <span>Payments</span>
          </div>
          <div className="tools">
            <FaArrowPointer />
            <span>Tools</span>
          </div>{" "}
          <div className="discounts">
            <BiSolidOffer />
            <span>Discounts</span>
          </div>{" "}
          <div className="audience">
            <IoIosPersonAdd />
            <span>Audience</span>
          </div>{" "}
          <div className="appearance">
            <IoIosColorPalette />
            <span>Appearance</span>
          </div>{" "}
          <div className="plugins">
            <AiFillThunderbolt />
            <span>Plugins</span>
          </div>
        </div>
      </div>

      <div className="nav2">
        <div className="box1">
          <div className="pay">
            <span>Payments</span>
            <span>? How it works</span>
          </div>
          <div className="search">
            <span>
              <CiSearch />
            </span>
            <input type="text" placeholder="Search features,tutorials,etc." />
          </div>
          <div className="links">
            <RiMessage2Fill />
            <IoMdArrowDropdown />
          </div>
        </div>
        <div className="box2">
          ss
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import "./Dashboard.css";
import { TbLayoutDashboard } from "react-icons/tb";
import { ImOpera, ImStatsDots } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { AiFillSetting } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi";
import { TbCalculatorOff } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { GiThink } from "react-icons/gi";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { MdAddCard } from "react-icons/md";
import { MdGroups3 } from "react-icons/md";
import { GoRepo } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { TbClockPause } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import logo from "../../logo/Group.svg";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
const Dashboard = () => {
  const [open, setOpen] = useState("dashbowrd");
  const opened = () => {
    setOpen("dashbowrd dashbowrdOpen");
  };
  const closed = () => {
    setOpen("dashbowrd");
  };
  return (
    <>
      <div className="button">
        <BsArrowLeftCircle onClick={closed} />
        <BsArrowRightCircle onClick={opened} />
      </div>
      <div className={open}>
        <div className="header-dash">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <Link to="">
              <li>
                <TbLayoutDashboard /> Dashboard
              </li>
            </Link>
            <Link to="">
              <li>
                <ImStatsDots /> Statistic
              </li>
            </Link>
            <Link to="">
              <li>
                <ImCoinDollar /> Payment
              </li>
            </Link>
            <Link to="">
              <li>
                <TiMessages /> Message
              </li>
            </Link>
            <a href="">
              <li>
                <SlBasket /> Items
              </li>
            </a>
            <a to="">
              <li>
                <HiUserGroup />
                Clients
              </li>
            </a>
            <Link to="">
              <li>
                <TbCalculatorOff />
                Expense
              </li>
            </Link>
            <Link to="">
              <li>
                <GiNotebook />
                Invoice
              </li>
            </Link>
            <a to="">
              <li>
                <MdEngineering />
                Job
              </li>
            </a>
            <a href="">
              <li>
                <MdAddCard />
                Request
              </li>
            </a>
            <Link to="/">
              <li>
                <BsReverseLayoutTextWindowReverse />
                Task
              </li>
            </Link>
            <Link to="">
              <li>
                <GiThink />
                Project
              </li>
            </Link>
            <Link to="">
              <li>
                <MdGroups3 />
                Employee
              </li>
            </Link>
            <Link to="">
              <li>
                <TiDocumentText />
                Schedule
              </li>
            </Link>
            <Link to="">
              <li>
                <GoRepo />
                Reports
              </li>
            </Link>
            <Link to="">
              <li>
                <TbClockPause />
                Timesheet
              </li>
            </Link>
          </ul>
        </div>
        <div className="footer-dash">
          <ul>
            <Link to="">
              <li>
                <AiFillSetting /> Setting
              </li>
            </Link>
            <Link to="/Login">
              <li>
                <FiLogIn /> Log in
              </li>
            </Link>
            <Link to="">
              <li>
                <GoSignOut /> Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

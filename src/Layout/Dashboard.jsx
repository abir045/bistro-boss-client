import React from "react";
import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //todo: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaUtensils /> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/users">
                  {" "}
                  <FaUser /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome /> User Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaCalendar /> Payment History
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/review">
                  {" "}
                  <FaAd /> Add a review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaList /> Real Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaList /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              {" "}
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import {
  IoCafeSharp,
  IoGridOutline,
  IoChevronDownOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Logo } from "images";

export default function Sidebar() {
  return (
    <aside>
      <div className="profile-wrapper">
        <img src={Logo} alt="asdf" />
        <span>Fajrin</span>
        <span>Administrator</span>
      </div>
      <hr />
      <div className="sidemenu-wrapper">
        <ul className="sidemenu">
          <li className="sidemenu-item">
            <NavLink to="/dashboard">
              <span>
                <IoGridOutline /> Dashboard
              </span>
            </NavLink>
          </li>
          <li className="sidemenu-item">
            <NavLink to="/master-data">
              <span>
                <IoCafeSharp /> Data Master
              </span>
              <IoChevronForwardSharp />
            </NavLink>
            <ul className="sub-sidemenu">
              <li className="sub-sidemenu-item">
                <NavLink to="/master-pengguna">
                  <span>
                    <IoCafeSharp /> Master Pengguna
                  </span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

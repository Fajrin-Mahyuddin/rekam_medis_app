import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/dashboard">dashboard</NavLink> <IoChevronForwardOutline />
      <NavLink to="/dashboard/content">content</NavLink>
    </div>
  );
};

export default Breadcrumbs;

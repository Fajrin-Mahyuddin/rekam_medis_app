import React, { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

interface Data {
  data: {
    nama: string;
    Ico: JSX.Element;
  };
}

const ListMenu: React.FC<Data> = ({ data: { nama, Ico } }) => {
  return (
    <li>
      <NavLink to="/">
        {Ico} {nama}
      </NavLink>
    </li>
  );
};

export default ListMenu;

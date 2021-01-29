import React from "react";
import { NavLink } from "react-router-dom";

interface Data {
  data: {
    nama: string;
    path: string;
    Ico: JSX.Element;
  };
}

const ListMenu: React.FC<Data> = ({ data: { nama, path, Ico } }) => {
  return (
    <li>
      <NavLink to={path}>
        {Ico} {nama}
      </NavLink>
    </li>
  );
};

export default ListMenu;

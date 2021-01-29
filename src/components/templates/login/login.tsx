import React, { Fragment } from "react";
import { Navbar } from "components";
import {
  IoLogInOutline,
  IoBookOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

interface Data {
  children: JSX.Element;
}

const menus: { nama: string; path: string; Ico: JSX.Element }[] = [
  { nama: "Login", path: "/", Ico: <IoLogInOutline /> },
  { nama: "Articles", path: "/acticles", Ico: <IoBookOutline /> },
  { nama: "Help", path: "/help", Ico: <IoHelpCircleOutline /> },
];

// const menu_dashboard: { nama: string; path: string; Ico: JSX.Element }[] = [
//   { nama: "Dashboard", path: "/", Ico: <IoLogInOutline /> },
//   { nama: "Articles", path: "/acticles", Ico: <IoBookOutline /> },
//   { nama: "Help", path: "/help", Ico: <IoHelpCircleOutline /> },
// ];

const LoginTemplate = ({ children }: Data) => {
  return (
    <Fragment>
      <Navbar data={menus} />
      {children}
    </Fragment>
  );
};

export default LoginTemplate;

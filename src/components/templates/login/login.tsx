import React, { Fragment } from "react";
import { Navbar } from "components";
import {
  IoLogInOutline,
  IoBookOutline,
  IoHelpCircleOutline,
  IoCogOutline,
} from "react-icons/io5";
import { Images } from "components";
import { Profile } from "images";

interface Data {
  children: JSX.Element;
}

// const menus: { nama: string; path: string; Ico: JSX.Element }[] = [
//   { nama: "Login", path: "/", Ico: <IoLogInOutline /> },
//   { nama: "Articles", path: "/acticles", Ico: <IoBookOutline /> },
//   { nama: "Help", path: "/help", Ico: <IoHelpCircleOutline /> },
// ];

const menu_dashboard: { nama: string; path: string; Ico: JSX.Element }[] = [
  { nama: "Profile", path: "/acticles", Ico: <IoBookOutline /> },
  { nama: "Setting", path: "/help", Ico: <IoCogOutline /> },
];

const LoginTemplate = ({ children }: Data) => {
  return (
    <Fragment>
      <Navbar data={menu_dashboard} />
      {children}
    </Fragment>
  );
};

export default LoginTemplate;

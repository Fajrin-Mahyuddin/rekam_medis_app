import React from "react";
import { Images, ListMenu } from "components";
import { Logo } from "images";
import { IoHomeOutline, IoCogOutline } from "react-icons/io5";

interface HeaderProps {
  data?: {};
}

const menus: { nama: string; Ico: JSX.Element }[] = [
  { nama: "Dashboard", Ico: <IoHomeOutline /> },
  { nama: "Setting", Ico: <IoCogOutline /> },
];

const Navbar: React.FC<HeaderProps> = (_props) => {
  return (
    <header>
      <Images source={Logo} alt="logo_navbar" />
      <div className="menus">
        <ul>
          {menus.length > 0 &&
            menus.map((item, i) => {
              console.log(item);
              return <ListMenu key={i} data={item} />;
            })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Images, ListMenu } from "components";
import { Logo } from "../../../react-app-env";

interface HeaderProps {
  data?: {};
}

const menus: { nama: string; ico: string }[] = [
  { nama: "Dashboard", ico: "hardware-chip-outline" },
  { nama: "Setting", ico: "cog-outline" },
];

const Navbar: React.FC<HeaderProps> = (_props) => {
  return (
    <header>
      <Images source="asd" alt={Logo} />
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

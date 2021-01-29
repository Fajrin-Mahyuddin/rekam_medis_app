import React from "react";
import { Images, ListMenu } from "components";
import { Logo } from "images";

interface HeaderProps {
  data?: any[];
}

const Navbar: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header>
      <Images source={Logo} alt="logo_navbar" />
      <div className="menus">
        <ul>
          {data &&
            data.map((item, i) => {
              return <ListMenu key={i} data={item} />;
            })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

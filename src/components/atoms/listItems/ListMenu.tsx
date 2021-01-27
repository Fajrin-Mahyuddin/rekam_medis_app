import React from "react";
import { NavLink } from "react-router-dom";
import { IonIcon, IonLabel } from "@ionic/react";

interface Data {
  data: {
    nama: string;
    ico: string;
  };
}

const ListMenu: React.FC<Data> = ({ data: { nama, ico } }) => {
  return (
    <li>
      <NavLink to="/">
        <IonIcon className="icon" icon={ico} />
        <IonLabel> {nama}</IonLabel>
      </NavLink>
    </li>
  );
};

export default ListMenu;

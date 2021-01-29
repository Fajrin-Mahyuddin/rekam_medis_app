import React from "react";

interface IBody {
  styles: string;
}

const Body: React.FC<IBody> = ({ styles, children }) => {
  return <section className={`container ${styles}`}>{children}</section>;
};

export default Body;

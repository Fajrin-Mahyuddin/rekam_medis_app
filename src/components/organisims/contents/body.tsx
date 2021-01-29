import React from "react";

interface IBody {
  style: string;
}

const Body: React.FC<IBody> = ({ style, children }) => {
  return <section className={`container ${style}`}>{children}</section>;
};

export default Body;

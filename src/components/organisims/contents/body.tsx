import React from "react";
import { Sidebar, Footer } from "components";

interface IBody {
  styles: string;
}

const Body: React.FC<IBody> = ({ styles, children }) => {
  return (
    <section className={`container ${styles}`}>
      <Sidebar /> {children} <Footer />
    </section>
  );
};

export default Body;

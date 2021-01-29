import React, { Fragment } from "react";
import { Navbar } from "components";

interface Data {
  children: JSX.Element;
}

const LoginTemplate = ({ children }: Data) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default LoginTemplate;

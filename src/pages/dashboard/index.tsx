import React from "react";
import {
  Body,
  // Button,
  // Footer,
  // Images,
  // InputWihtLabel,
  LoginTemplate,
} from "components";
// import { AssetOne, AssetTwo, AssetThree } from "images";
import { IoChevronForwardSharp } from "react-icons/io5";
// import { Redirect } from "react-router-dom";

const Dashboard = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // if (isLogin) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <LoginTemplate>
      <Body styles="content-wrapper">
        <div className="content">
          <div className="breacrumbs">
            dashboard <IoChevronForwardSharp /> content
          </div>
          <div className="body">ini bodi</div>
        </div>
      </Body>
    </LoginTemplate>
  );
};

export default Dashboard;

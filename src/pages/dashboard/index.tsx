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
// import {
//   IoPersonOutline,
//   IoKeyOutline,
//   IoLogoFacebook,
//   IoLogoGoogle,
// } from "react-icons/io5";
// import { Redirect } from "react-router-dom";

const Dashboard = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // if (isLogin) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <LoginTemplate>
      <Body styles="row">
        <div>sidebar</div>
        <div>content</div>
        <div>footer</div>
      </Body>
    </LoginTemplate>
  );
};

export default Dashboard;

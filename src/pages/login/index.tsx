import React, { ReactEventHandler } from "react";
import {
  Body,
  Footer,
  Images,
  InputWihtLabel,
  LoginTemplate,
} from "components";
import { AssetOne, AssetTwo, AssetThree } from "images";

const Login = () => {
  return (
    <LoginTemplate>
      <Body style="row">
        <div className="form-login">
          <div className="form-wrapper">
            <div className="welcome-text">
              <span>Medical Record App</span>
              <span>Track your medical check and health</span>
            </div>
            <div className="input-wrapper vertical m-10-0">
              <InputWihtLabel
                type="text"
                id="nik"
                label="Nomor Induk Kependudukan"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(e.target.value)
                }
              />
            </div>
            <div className="input-wrapper vertical m-10-0">
              <InputWihtLabel
                type="password"
                id="password"
                styles="vertical"
                label="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(e.target.value)
                }
              />
            </div>
          </div>
          <div className="sosial-login"></div>
          <Footer />
        </div>
        <div className="image-login">
          <Images source={AssetOne} alt="AssetOne" />
          <Images source={AssetTwo} alt="AssetTwo" />
          <Images source={AssetThree} alt="AssetThree" />
        </div>
      </Body>
    </LoginTemplate>
  );
};

export default Login;

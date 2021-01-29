import React, { useState } from "react";
import {
  Body,
  Button,
  Footer,
  Images,
  InputWihtLabel,
  LoginTemplate,
} from "components";
import { AssetOne, AssetTwo, AssetThree } from "images";
import {
  IoPersonOutline,
  IoKeyOutline,
  IoLogoFacebook,
  IoLogoGoogle,
} from "react-icons/io5";
import { NavLink, Redirect } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <LoginTemplate>
      <Body styles="row">
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
                ico={<IoPersonOutline />}
                label="NIK"
                placeholder="nomor induk kependudukan"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(e.target.value)
                }
              />
            </div>
            <div className="input-wrapper vertical m-10-0">
              <InputWihtLabel
                type="password"
                id="password"
                ico={<IoKeyOutline />}
                styles="vertical"
                label="Password"
                placeholder="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(e.target.value)
                }
              />
            </div>
            <div className="link-form justify-spare-between">
              <div className="horizontal">
                <InputWihtLabel
                  type="checkbox"
                  id="remember_me"
                  styles="vertical"
                  label="Remember Me ?"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    console.log(e.target.value)
                  }
                />
              </div>
              <div className="horizontal">
                <NavLink to="/dashboard">Forget Password ?</NavLink>
              </div>
            </div>
            <div className="horizontal">
              <Button
                title="Sign In"
                onClick={() => setIsLogin(true)}
                type_btn="info-btn p-5-15 m-10-0 mr-5"
              />
              <Button title="Register" type_btn="warning-btn p-5-15 m-10-0" />
            </div>
            <div className="sosial-login mt-25">
              <span className="line "></span>
              <p>or login with :</p>
              <div className="m-20-0">
                <Button
                  title="Facebook"
                  type_btn="facebook-btn p-5-15"
                  ico={<IoLogoFacebook />}
                />
                <Button
                  title="Google"
                  type_btn="google-btn p-5-15"
                  ico={<IoLogoGoogle />}
                />
              </div>
            </div>
          </div>
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

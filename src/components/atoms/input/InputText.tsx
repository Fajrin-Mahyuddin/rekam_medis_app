import React, { InputHTMLAttributes } from "react";

interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
}

const InputText: React.FC<IInputText> = ({ type, id, ...props }) => {
  return <input type={type} id={id} {...props} />;
};

export default InputText;

import React from "react";
import { InputText } from "components";

interface IInputWithLabel {
  id: string;
  label: string;
  type: string;
  styles?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<IInputWithLabel> = ({
  type,
  id,
  label,
  styles,
  onChange,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputText
        type={type}
        className={styles}
        id={id}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputWithLabel;

import React from "react";
import { InputText } from "components";

interface IInputWithLabel {
  id: string;
  label: string;
  type: string;
  ico?: JSX.Element;
  placeholder?: string;
  styles?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<IInputWithLabel> = ({
  type,
  id,
  label,
  styles,
  ico,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      {type === "text" || type === "password" ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        ""
      )}
      {ico}
      <InputText
        type={type}
        className={styles}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {type === "checkbox" || type === "radio" ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        ""
      )}
    </>
  );
};

export default InputWithLabel;

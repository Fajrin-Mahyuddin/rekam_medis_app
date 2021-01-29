import React from "react";

interface button {
  title: string;
  ico?: JSX.Element;
  type_btn?: string;
  onClick?: (e: {}) => void;
}

export default function Button({ title, type_btn, ico, onClick }: button) {
  return (
    <button className={type_btn} onClick={onClick}>
      {ico} {title}
    </button>
  );
}

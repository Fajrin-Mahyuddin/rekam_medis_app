import React from "react";

interface button {
  title: string;
  type_btn?: string;
}

export default function Button({ title, type_btn }: button) {
  return <button className={type_btn}>{title}</button>;
}

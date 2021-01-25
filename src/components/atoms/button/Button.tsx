import React from "react";

interface button {
  title: string;
}

export default function Button({ title }: button) {
  return <button>{title}</button>;
}

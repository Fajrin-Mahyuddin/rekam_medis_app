import React from "react";
import { Image } from "../../atoms";

interface headerProps {
  data?: {};
}

export default function Navbar(props: headerProps) {
  return (
    <header>
      <Image src="tes" alt="tes_alt" />
    </header>
  );
}

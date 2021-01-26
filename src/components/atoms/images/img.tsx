import React from "react";

interface img {
  src: string;
  alt: string;
}

export default function Images({ src, alt, ...rest }: img) {
  return <img src={src} alt={alt} {...rest} />;
}

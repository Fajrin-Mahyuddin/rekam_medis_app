import React from "react";

interface Imgs {
  source: string;
  alt: string;
}

const Images: React.FC<Imgs> = ({ source, alt }) => {
  return <img src={source} alt={alt} />;
};

export default Images;

import React from "react";
import HeaderDiv from "./HeaderDiv";

const PagesHero = ({ bgImage, header }: { bgImage: string; header: JSX.Element }) => {
  return <div className={`bg-[${bgImage}] w-full min-h-[400px] flex items-center justify-center bg-no-repeat bg-cover bg-center`}>{header}</div>;
};

export default PagesHero;

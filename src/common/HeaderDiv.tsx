import React from "react";

const HeaderDiv = ({ h1, p, textCase }: { h1: string; p?: string; textCase: string }) => {
  return (
    <div className="text-white text-center">
      <h1 className={`md:text-5xl text-3xl font-bold ${textCase === "uppercase" ? "uppercase" : "capitalize"}`}>{h1}</h1>
      <p className="capitalize md:text-xl text-lg font-light mt-2">{p}</p>
    </div>
  );
};

export default HeaderDiv;

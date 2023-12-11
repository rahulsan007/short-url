import React from "react";

function HeroHeadline() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-6">
      <h1 className="font-extrabold text-[35px]   md:text-[56px] text-lightBlack ">
        Make every <span className="text-secondary">connection</span> count
      </h1>
      <p className="text-lightBlack/75 text-base md:text-lg">
        Create short links, QR Codes, and Link-in-bio pages. Share them
        anywhere.
      </p>
    </div>
  );
}

export default HeroHeadline;

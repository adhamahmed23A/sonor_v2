import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-0.5">
      <svg
        data-logo="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98 41"
        width="34"
        height="24"
      >
        <g
          id="logogram"
          transform="
    translate(0, 0)
    rotate(0 48.5 20.5)
    
  "
        >
          <path
            d="M68.75 0.809967H96.25L72.5 40.81H45L68.75 0.809967Z"
            fill="#1447E6"
          />
          <path
            d="M43.75 0.809967H63.75L40 40.81H20L43.75 0.809967Z"
            fill="#1447E6"
          />
          <path
            d="M23.75 0.809967H38.75L15 40.81H0L23.75 0.809967Z"
            fill="#1447E6"
          />
        </g>
        <g id="logotype" transform=""></g>
      </svg>
      <h1 className="tracking-tighter text-lg ">Sonour</h1>
    </div>
  );
};

export default Logo;

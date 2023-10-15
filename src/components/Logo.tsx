import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="M" transform="translate(21.000000, 25.000000)">
          <path
            fill="currentColor"
            d="M 28.88 20 L 40.4 0 L 57.72 30 L 51.96 40 L 40.4 20 L 34.64 30 L 40.4 40 L 28.88 40 L 17.32 20 L 11.56 30 L 17.32 40 L 5.76 40 L 0 30 L 17.32 0 L 28.88 20 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;

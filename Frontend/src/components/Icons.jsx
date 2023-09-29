import React from "react";

export const CheckIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm5.7279221 11-7.0710679 7.0710678-4.2426406-4.2426407-1.4142136 1.4142136 5.6568542 5.6568542 8.4852814-8.4852813z"
          fill="#187605"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export const DownIcon = ({ className }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill="#000000"
      />
    </svg>
  );
};

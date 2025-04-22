import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M7 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M1.5 7a5.5 5.5 0 1 1 9.727 3.52l3.127 3.126a.5.5 0 0 1-.708.708l-3.126-3.127A5.5 5.5 0 0 1 1.5 7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;

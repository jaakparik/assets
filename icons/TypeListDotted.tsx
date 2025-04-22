import * as React from "react";
import type { SVGProps } from "react";
const SvgTypeListDotted = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M5.5 3.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1zM5 12a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 12M3.5 8A.75.75 0 1 1 2 8a.75.75 0 0 1 1.5 0m-.75 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTypeListDotted;

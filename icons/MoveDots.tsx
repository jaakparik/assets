import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveDots = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoveDots;

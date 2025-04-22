import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.707 13.667a1 1 0 0 1-1.414 0L1.98 10.354a.5.5 0 0 1 .707-.708L5.5 12.46V2a.5.5 0 0 1 1 0v10.46l2.813-2.814a.5.5 0 1 1 .707.707zM8.5 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1zM8 5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H8.5A.5.5 0 0 1 8 5m.5 1.5a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilterDown;

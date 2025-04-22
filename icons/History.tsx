import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M8.5 4a.5.5 0 0 0-1 0v3.586c0 .398.158.78.44 1.06l1.706 1.708a.5.5 0 0 0 .708-.708L8.646 7.94a.5.5 0 0 1-.146-.353z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHistory;

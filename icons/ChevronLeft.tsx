import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8.707a1 1 0 0 1 0-1.414L8.313 4.98a.5.5 0 1 1 .707.707L6.707 8l2.313 2.313a.5.5 0 1 1-.707.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeft;

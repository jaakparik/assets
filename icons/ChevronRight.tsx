import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7.293a1 1 0 0 1 0 1.414L7.687 11.02a.5.5 0 0 1-.707-.707L9.293 8 6.98 5.687a.5.5 0 1 1 .707-.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;

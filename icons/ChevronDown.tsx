import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.707 10a1 1 0 0 1-1.414 0L4.98 7.687a.5.5 0 0 1 .707-.707L8 9.293l2.313-2.313a.5.5 0 1 1 .707.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;

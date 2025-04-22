import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.293 12a1 1 0 0 0 1.414 0l3.313-3.313a.5.5 0 0 0-.707-.707L8.5 10.793V3a.5.5 0 0 0-1 0v7.793L4.687 7.98a.5.5 0 1 0-.707.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;

import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.707 4a1 1 0 0 0-1.414 0L3.98 7.313a.5.5 0 0 0 .707.707L7.5 5.207V13a.5.5 0 0 0 1 0V5.207l2.813 2.813a.5.5 0 1 0 .707-.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;

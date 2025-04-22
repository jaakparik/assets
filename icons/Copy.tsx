import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 2A1.5 1.5 0 0 0 5 3.5V4h-.5A1.5 1.5 0 0 0 3 5.5v7A1.5 1.5 0 0 0 4.5 14h5a1.5 1.5 0 0 0 1.5-1.5V12h.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 2zM10 12H6.5A1.5 1.5 0 0 1 5 10.5V5h-.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5zM6 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopy;

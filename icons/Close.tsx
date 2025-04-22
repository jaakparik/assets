import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.828 11.536a.5.5 0 1 0 .707-.708L8.707 8l2.829-2.828a.5.5 0 0 0-.708-.708L8 7.293 5.17 4.464a.5.5 0 1 0-.707.708L7.293 8l-2.829 2.828a.5.5 0 1 0 .707.708L8 8.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;

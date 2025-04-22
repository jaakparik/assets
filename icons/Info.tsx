import * as React from "react";
import type { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 7.297a.5.5 0 0 1 .5.5v3.69a.5.5 0 1 1-1 0v-3.69a.5.5 0 0 1 .5-.5M8 6a.625.625 0 1 0 0-1.25A.625.625 0 0 0 8 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfo;

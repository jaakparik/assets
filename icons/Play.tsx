import * as React from "react";
import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.696 4.732a1.5 1.5 0 0 1 2.25-1.299l6 3.464c1 .577 1 2.02 0 2.598l-6 3.464a1.5 1.5 0 0 1-2.25-1.299zm1.75-.433a.5.5 0 0 0-.75.433v6.928a.5.5 0 0 0 .75.433l6-3.464a.5.5 0 0 0 0-.866z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;

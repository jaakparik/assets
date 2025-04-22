import * as React from "react";
import type { SVGProps } from "react";
const SvgError = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.5 6.94a.5.5 0 0 0 1 0V4.75a.5.5 0 0 0-1 0zm-.125 2.422a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgError;

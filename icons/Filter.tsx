import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.833 4.667a.5.5 0 0 1 .5-.5h9.334a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5m2 3.333a.5.5 0 0 1 .5-.5h5.334a.5.5 0 0 1 0 1H5.333a.5.5 0 0 1-.5-.5m1.334 3.333a.5.5 0 0 1 .5-.5h2.666a.5.5 0 1 1 0 1H6.667a.5.5 0 0 1-.5-.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;

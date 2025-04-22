import * as React from "react";
import type { SVGProps } from "react";
const SvgHotspot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a6 6 0 1 1 10.25 4.235.5.5 0 0 0 .708.706 7 7 0 1 0-9.916 0 .5.5 0 0 0 .708-.706A5.98 5.98 0 0 1 2 8m6-3.5a3.5 3.5 0 0 0-2.315 6.125.5.5 0 0 1-.662.75 4.5 4.5 0 1 1 6.176-.21.5.5 0 0 1-.71-.704A3.5 3.5 0 0 0 8 4.5M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHotspot;

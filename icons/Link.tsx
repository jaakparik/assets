import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.105 2.898a3.33 3.33 0 0 0-4.71 0l-.869.868a.5.5 0 1 0 .707.707l.869-.868A2.33 2.33 0 0 1 12.4 6.9l-.875.878a.5.5 0 1 0 .708.706l.875-.878a3.33 3.33 0 0 0-.004-4.707M4.473 8.234a.5.5 0 0 0-.707-.708l-.87.87a3.328 3.328 0 1 0 4.707 4.708l.87-.87a.5.5 0 0 0-.707-.708l-.87.87a2.329 2.329 0 0 1-3.293-3.292zm5.724-1.724a.5.5 0 1 0-.707-.707l-4 4a.5.5 0 1 0 .707.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink;

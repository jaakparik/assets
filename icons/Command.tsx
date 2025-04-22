import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 4.75a2.25 2.25 0 0 1 4.5 0V6h2V4.75A2.25 2.25 0 1 1 11.25 7H10v2h1.25A2.25 2.25 0 1 1 9 11.25V10H7v1.25A2.25 2.25 0 1 1 4.75 9H6V7H4.75A2.25 2.25 0 0 1 2.5 4.75M4.75 3.5a1.25 1.25 0 1 0 0 2.5H6V4.75c0-.69-.56-1.25-1.25-1.25m7.75 1.25a1.25 1.25 0 1 0-2.5 0V6h1.25c.69 0 1.25-.56 1.25-1.25M6 11.25A1.25 1.25 0 1 1 4.75 10H6zm5.25 1.25a1.25 1.25 0 1 0 0-2.5H10v1.25c0 .69.56 1.25 1.25 1.25M7 9V7h2v2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommand;

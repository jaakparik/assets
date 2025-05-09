import * as React from "react";
import type { SVGProps } from "react";
const SvgOptions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#1C2128"
      d="M6 9a2 2 0 0 1 1.937 1.5H13.5a.5.5 0 0 1 .09.992l-.09.008-5.563.001a2 2 0 0 1-3.874 0L2.5 11.5a.5.5 0 0 1-.09-.992l.09-.008h1.563A2 2 0 0 1 6 9m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-7a2 2 0 0 1 1.937 1.5H13.5a.5.5 0 0 1 .09.992l-.09.008-1.563.001a2 2 0 0 1-3.874 0L2.5 5.5a.5.5 0 0 1-.09-.992L2.5 4.5h5.563A2 2 0 0 1 10 3m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgOptions;

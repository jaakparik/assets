import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8.374a1 1 0 0 0 0-1.414L8.687 3.646a.5.5 0 1 0-.707.708l2.813 2.813H3a.5.5 0 1 0 0 1h7.793L7.98 10.98a.5.5 0 1 0 .707.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;

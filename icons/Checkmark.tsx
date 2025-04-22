import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.625 5.146a.5.5 0 0 1 0 .708L7.248 11.23a1 1 0 0 1-1.487-.08l-1.88-2.338a.5.5 0 0 1 .78-.626l1.88 2.337 5.377-5.378a.5.5 0 0 1 .707 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckmark;

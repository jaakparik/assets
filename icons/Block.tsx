import * as React from "react";
import type { SVGProps } from "react";
const SvgBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.227 11.52 4.48 3.773a5.5 5.5 0 0 1 7.747 7.747M3.773 4.48l7.747 7.747A5.5 5.5 0 0 1 3.773 4.48m8.823-1.076a6.5 6.5 0 1 0-9.192 9.192 6.5 6.5 0 0 0 9.192-9.192"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBlock;

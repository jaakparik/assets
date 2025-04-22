import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.103 2.347a1 1 0 0 1 1.794 0l1.495 3.03 3.345.488a1 1 0 0 1 .553 1.706l-2.42 2.357.572 3.329a1 1 0 0 1-1.451 1.054L8 12.738l-2.99 1.573a1 1 0 0 1-1.451-1.054l.57-3.329-2.42-2.357a1 1 0 0 1 .554-1.706l3.345-.488zM8 2.79 6.505 5.82a1 1 0 0 1-.752.546l-3.345.489 2.42 2.357a1 1 0 0 1 .287.885l-.57 3.329 2.99-1.573a1 1 0 0 1 .93 0l2.991 1.573-.571-3.329a1 1 0 0 1 .288-.885l2.42-2.357-3.345-.489a1 1 0 0 1-.753-.547z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;

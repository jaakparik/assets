import * as React from "react";
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M8 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 12.76C4.5 10.703 6.025 9 8 9s3.5 1.703 3.5 3.76v.543c-.691.072-2.098.197-3.5.197s-2.809-.125-3.5-.197zm8 0C12.5 10.235 10.607 8 8 8s-4.5 2.235-4.5 4.76v.916c0 .284.209.543.514.58.38.044 2.18.244 3.986.244s3.606-.2 3.986-.245a.58.58 0 0 0 .514-.579z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPerson;

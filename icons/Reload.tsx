import * as React from "react";
import type { SVGProps } from "react";
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.775 3.931a1 1 0 0 1-.707 1.225l-1.749.468a.5.5 0 0 1-.259-.965l1.44-.386A4.502 4.502 0 0 0 3.547 7.18a.5.5 0 0 1-.002.168q-.068.376-.072.756.011.528.153 1.06a.5.5 0 0 1 .012.202 4.5 4.5 0 0 0 1.13 1.949.5.5 0 0 1 .294.117 4.502 4.502 0 0 0 7.262-4.598.5.5 0 1 1 .965-.259 5.5 5.5 0 0 1-1.28 5.166.5.5 0 0 1-.144.303 5.502 5.502 0 0 1-9.392-3.922 5.504 5.504 0 0 1 8.05-5l-.183-.682a.5.5 0 1 1 .966-.258z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReload;

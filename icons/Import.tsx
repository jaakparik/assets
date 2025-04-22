import * as React from "react";
import type { SVGProps } from "react";
const SvgImport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 2a.5.5 0 0 0-1 0v12a.5.5 0 1 0 1 0zm-3 4.96c.127.127.213.28.257.441a.5.5 0 0 1 0 .531 1 1 0 0 1-.257.442l-3.313 3.313a.5.5 0 0 1-.707-.707l2.813-2.813H3a.5.5 0 0 1 0-1h6.293L6.48 4.354a.5.5 0 1 1 .707-.708z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImport;

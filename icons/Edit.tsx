import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.424 2.717a.6.6 0 0 0-.848 0l-6.4 6.4A.6.6 0 0 0 5 9.541V10.9a.6.6 0 0 0 .6.6h1.359a.6.6 0 0 0 .424-.176l6.4-6.4a.6.6 0 0 0 0-.848zM10.957 4.75 12 3.707l.793.793-1.043 1.043zm-.707.707L6 9.707v.793h.793l4.25-4.25zM2 12.5a.5.5 0 1 0 0 1h3.5a.5.5 0 0 0 0-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEdit;

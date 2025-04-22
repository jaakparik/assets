import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.512 6.488 2.276-2.276a.3.3 0 0 1 .424 0l2.276 2.276a.3.3 0 0 1-.212.512H5.724a.3.3 0 0 1-.212-.512m4.976 3.024-2.276 2.276a.3.3 0 0 1-.424 0L5.512 9.512A.3.3 0 0 1 5.724 9h4.552a.3.3 0 0 1 .212.512"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSort;

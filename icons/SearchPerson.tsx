import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2.5a4.5 4.5 0 0 0-2.84 7.99C4.666 9.42 5.705 8.645 7 8.645s2.333.774 2.84 1.845q.18-.146.342-.308A4.5 4.5 0 0 0 7 2.5m1.992 8.536C8.655 10.216 7.897 9.645 7 9.645s-1.655.57-1.992 1.391c.6.297 1.277.464 1.992.464a4.5 4.5 0 0 0 1.992-.464M1.5 7a5.5 5.5 0 1 1 9.727 3.52l3.127 3.126a.5.5 0 0 1-.708.708l-3.126-3.127A5.5 5.5 0 0 1 1.5 7M7 5a.823.823 0 1 0 0 1.646A.823.823 0 0 0 7 5m-1.823.823a1.823 1.823 0 1 1 3.646 0 1.823 1.823 0 0 1-3.646 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearchPerson;

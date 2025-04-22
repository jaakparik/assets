import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3.5A2.5 2.5 0 0 1 7.5 1h1A2.5 2.5 0 0 1 11 3.5h2.5a.5.5 0 0 1 0 1h-.31l-.595 8.638A2 2 0 0 1 10.6 15H5.4a2 2 0 0 1-1.995-1.862L2.809 4.5H2.5a.5.5 0 0 1 0-1H5M8.5 2A1.5 1.5 0 0 1 10 3.5H6A1.5 1.5 0 0 1 7.5 2zM3.812 4.5h8.376l-.59 8.569A1 1 0 0 1 10.6 14H5.4a1 1 0 0 1-.998-.931zm2.686 1.459a.5.5 0 0 0-.996.083l.5 6a.5.5 0 0 0 .996-.083zm4 .083a.5.5 0 0 0-.996-.083l-.5 6a.5.5 0 1 0 .996.082z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;

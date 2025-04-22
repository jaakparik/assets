import * as React from "react";
import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.8 3.851a1 1 0 0 1-.707 1.225l-1.749.468a.5.5 0 1 1-.259-.966l1.27-.34A4.502 4.502 0 0 0 3.651 9.24a.5.5 0 0 1-.966.259 5.502 5.502 0 0 1 7.912-6.275l-.231-.863a.5.5 0 0 1 .966-.259zm-7.778 8.298a1 1 0 0 1 .707-1.225l1.748-.468a.5.5 0 1 1 .26.966l-1.307.35a4.502 4.502 0 0 0 6.918-4.862.5.5 0 0 1 .967-.26 5.502 5.502 0 0 1-8.074 6.185l.215.804a.5.5 0 0 1-.966.259z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRefresh;

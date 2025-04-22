import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.5A3.5 3.5 0 0 0 4.5 6v.5c0 1.385-.434 2.67-1.172 3.724a.07.07 0 0 0-.011.056A15.4 15.4 0 0 0 8 11q.937 0 1.846-.109a15.4 15.4 0 0 0 2.837-.61.07.07 0 0 0-.01-.057A6.47 6.47 0 0 1 11.5 6.5V6A3.5 3.5 0 0 0 8 2.5M3.5 6a4.5 4.5 0 0 1 9 0v.5c0 1.173.367 2.259.991 3.15.36.515.22 1.353-.497 1.58-.808.257-1.644.453-2.5.583q.006.093.006.187a2.5 2.5 0 1 1-4.993-.187 16.4 16.4 0 0 1-2.501-.583c-.717-.227-.857-1.065-.497-1.58A5.47 5.47 0 0 0 3.5 6.5zm3.002 5.933L6.5 12a1.5 1.5 0 1 0 2.999-.067 16.7 16.7 0 0 1-2.997 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;

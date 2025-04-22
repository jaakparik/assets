import * as React from "react";
import type { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.335 3.788C4.48 3.658 6.243 3.5 8 3.5s3.52.159 4.665.288c.225.025.425.13.572.287a1 1 0 0 0-.054.038L8.95 7.577a1.5 1.5 0 0 1-1.9 0L2.817 4.113a1 1 0 0 0-.054-.038.93.93 0 0 1 .572-.287M2.5 5.146v6.11c0 .496.36.902.835.956 1.145.13 2.908.288 4.665.288s3.52-.159 4.665-.288a.95.95 0 0 0 .835-.956v-6.11L9.583 8.351a2.5 2.5 0 0 1-3.166 0zM8 2.5c-1.81 0-3.615.163-4.777.294A1.95 1.95 0 0 0 1.5 4.744v6.512a1.95 1.95 0 0 0 1.723 1.95c1.162.131 2.967.294 4.777.294s3.615-.163 4.777-.294a1.95 1.95 0 0 0 1.723-1.95V4.744a1.95 1.95 0 0 0-1.723-1.95C11.615 2.663 9.81 2.5 8 2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEnvelope;

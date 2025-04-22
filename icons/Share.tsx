import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 6.273a.5.5 0 1 0-1 0v6.02c0 .964.693 1.807 1.673 1.935.972.127 2.396.272 3.827.272s2.855-.146 3.827-.272c.98-.128 1.673-.97 1.673-1.934V6.273a.5.5 0 0 0-1 0v6.02a.934.934 0 0 1-.802.943c-.95.124-2.328.264-3.698.264s-2.748-.14-3.698-.264a.934.934 0 0 1-.802-.942zM5.687 5.02 7.5 3.207v6.46a.5.5 0 0 0 1 0v-6.46l1.813 1.813a.5.5 0 1 0 .707-.707L8.707 2a1 1 0 0 0-1.414 0L4.98 4.313a.5.5 0 0 0 .707.707"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare;

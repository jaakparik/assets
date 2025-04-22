import * as React from "react";
import type { SVGProps } from "react";
const SvgClick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.487 1.716a.5.5 0 1 0-1 0v1.622a.5.5 0 0 0 1 0zm-2.985.863a.5.5 0 0 0-.707.707l1.216 1.216a.5.5 0 1 0 .708-.707zm5.676.707a.5.5 0 1 0-.707-.707L8.255 3.795a.5.5 0 1 0 .707.707zM2.933 5.27a.5.5 0 1 0 0 1h1.621a.5.5 0 1 0 0-1zm4.345-.311a.5.5 0 0 0-.791.406v8.919a.5.5 0 0 0 .916.277l2.46-3.693 4.195.078a.5.5 0 0 0 .3-.906zm.209 7.673V6.339l4.984 3.577-2.862-.053a.5.5 0 0 0-.426.222z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClick;

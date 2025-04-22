import * as React from "react";
import type { SVGProps } from "react";
const SvgMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.374 2A1 1 0 0 0 6.96 2L5.647 3.313a.5.5 0 0 0 .707.707l.813-.813v4.126H3.04l.98-.98a.5.5 0 0 0-.708-.707l-1.48 1.48a1 1 0 0 0 0 1.414l1.48 1.48a.5.5 0 1 0 .707-.707l-.98-.98h4.127v4.127l-.813-.814a.5.5 0 1 0-.707.708l1.313 1.313a1 1 0 0 0 1.414 0l1.313-1.313a.5.5 0 1 0-.707-.707l-.813.813V8.333h4.126l-.98.98a.5.5 0 1 0 .707.707l1.48-1.48a1 1 0 0 0 0-1.414l-1.48-1.48a.5.5 0 1 0-.707.708l.98.98H8.167V3.206l.813.813a.5.5 0 0 0 .707-.707z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMove;

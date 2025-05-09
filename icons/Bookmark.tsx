import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 3.762v8.845l.012.007q.018.004.022.003l.005-.005a25 25 0 0 1 1.587-1.714c.27-.259.54-.496.79-.671.124-.088.253-.168.382-.227.123-.057.28-.111.452-.111s.329.054.452.11c.129.06.258.14.383.228.249.175.52.412.79.67.54.52 1.122 1.172 1.586 1.715l.005.005q.004 0 .022-.003l.012-.007V3.762C10.6 3.665 9.296 3.5 8 3.5s-2.6.165-3.25.262m-.161-.987C5.253 2.675 6.623 2.5 8 2.5s2.747.176 3.411.275a.986.986 0 0 1 .839.98v8.85c0 .96-1.201 1.357-1.8.656a24 24 0 0 0-1.518-1.642 6 6 0 0 0-.673-.575 1.5 1.5 0 0 0-.259-.15l-.034.014a1.5 1.5 0 0 0-.225.136 6 6 0 0 0-.673.575 24 24 0 0 0-1.518 1.642c-.599.7-1.8.303-1.8-.655V3.754c0-.482.347-.905.839-.979"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark;

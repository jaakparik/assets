import * as React from "react";
import type { SVGProps } from "react";
const SvgStats = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.211 3.255C5.24 3.128 6.622 3 8 3s2.761.128 3.789.255C12.483 3.34 13 3.94 13 4.669v6.662c0 .729-.517 1.329-1.211 1.414C10.76 12.872 9.378 13 8 13s-2.761-.128-3.789-.255C3.517 12.66 3 12.06 3 11.331V4.669c0-.729.517-1.329 1.211-1.414M8 2c-1.434 0-2.861.133-3.91.262C2.864 2.412 2 3.465 2 4.67v6.662c0 1.204.865 2.256 2.09 2.407C5.138 13.867 6.565 14 8 14s2.861-.133 3.91-.262c1.225-.15 2.09-1.203 2.09-2.407V4.669c0-1.204-.865-2.256-2.09-2.407C10.862 2.133 9.435 2 8 2M6 7.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0zm2-3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m3 5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStats;

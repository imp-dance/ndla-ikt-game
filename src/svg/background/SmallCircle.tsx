import * as React from "react";

function SvgSmallcircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
      <g fill="#fff" stroke="#20588f" strokeWidth={3}>
        <circle cx={7} cy={7} r={7} stroke="none" />
        <circle cx={7} cy={7} r={5.5} fill="none" />
      </g>
    </svg>
  );
}

export default SvgSmallcircle;

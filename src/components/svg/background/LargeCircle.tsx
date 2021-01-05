import * as React from "react";

function SvgLargecircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} {...props}>
      <g fill="#fff" stroke="#20588f" strokeWidth={3}>
        <circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
        <circle cx={8.5} cy={8.5} r={7} fill="none" />
      </g>
    </svg>
  );
}

export default SvgLargecircle;

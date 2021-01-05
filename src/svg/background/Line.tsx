import * as React from "react";

function SvgLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1821.999}
      height={3}
      {...props}
    >
      <path
        d="M1.5 1.5h1819"
        fill="none"
        stroke="#20588f"
        strokeLinecap="round"
        strokeWidth={3}
      />
    </svg>
  );
}

export default SvgLine;

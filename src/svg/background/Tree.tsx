import * as React from "react";

function SvgTree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={49} height={177} {...props}>
      <defs>
        <style>
          {
            ".Tree_svg__b{stroke:#20588f;stroke-linecap:round;stroke-width:3px;fill:none}"
          }
        </style>
      </defs>
      <g stroke="#20588f" strokeLinecap="round" strokeWidth={3} fill="#d0e8de">
        <rect width={49} height={105} rx={24.5} stroke="none" />
        <rect x={1.5} y={1.5} width={46} height={102} rx={23} fill="none" />
      </g>
      <path
        className="Tree_svg__b"
        d="M24.352 105.5v-89M24.352 105.5v-89M24.59 90.126l13.524-13.523M24.114 90.127L10.591 76.604M24.59 71.126l13.524-13.523M24.114 71.127L10.591 57.604M24.59 52.126l13.524-13.523M24.114 52.127L10.591 38.604M24.59 33.126l13.524-13.523M24.114 33.127L10.591 19.604M24.352 175.5v-70"
      />
    </svg>
  );
}

export default SvgTree;

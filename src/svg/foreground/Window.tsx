import * as React from "react";

function SvgWindow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={106} height={188} {...props}>
      <defs>
        <style>
          {
            ".Window_svg__c,.Window_svg__d,.Window_svg__e{stroke-linecap:round;stroke:#20588f;stroke-width:3px}.Window_svg__c{fill:none}.Window_svg__d,.Window_svg__e{stroke-linejoin:round}.Window_svg__d{fill:#d0e8de}.Window_svg__e{fill:#fff}.Window_svg__f{stroke:none}"
          }
        </style>
      </defs>
      <g strokeLinecap="round" fill="none">
        <path className="Window_svg__f" d="M16 15h90v173H16z" />
        <path d="M19 18v167h84V18H19m-3-3h90v173H16V15z" fill="#fff" />
      </g>
      <g
        strokeLinejoin="round"
        stroke="#20588f"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      >
        <path className="Window_svg__f" d="M0 0h90v172H0z" />
        <path d="M1.5 1.5h87v169h-87z" />
      </g>
      <path
        className="Window_svg__c"
        d="M39.289 64.976l30.622-30.622M34.696 55.789l15.311-15.311M62.256 55.789l15.311-15.311"
      />
      <g>
        <ellipse
          className="Window_svg__d"
          cx={6.439}
          cy={15.15}
          rx={6.439}
          ry={15.15}
          transform="rotate(144 2.85 78.358)"
        />
        <ellipse
          className="Window_svg__d"
          cx={6.439}
          cy={15.15}
          rx={6.439}
          ry={15.15}
          transform="rotate(36 -149.471 145.06)"
        />
        <path
          className="Window_svg__e"
          d="M52.163 170.232H37.936a2.411 2.411 0 01-2.253-2.278l-.911-7.9a2.52 2.52 0 012.253-2.969h16.052a2.52 2.52 0 012.253 2.969l-.911 7.9a2.411 2.411 0 01-2.256 2.278z"
        />
        <path
          className="Window_svg__e"
          d="M57.195 158.855h-23.93a2.273 2.273 0 01-2.16-1.565l-1.541-4.711a2.272 2.272 0 012.16-2.979h27.012a2.272 2.272 0 012.16 2.979l-1.542 4.708a2.273 2.273 0 01-2.159 1.568z"
        />
        <g transform="translate(38.918 114)">
          <ellipse
            className="Window_svg__d"
            cx={6.5}
            cy={15}
            rx={6.5}
            ry={15}
            transform="translate(-.033)"
          />
          <path className="Window_svg__c" d="M6.348 34.467V15" />
        </g>
      </g>
    </svg>
  );
}

export default SvgWindow;

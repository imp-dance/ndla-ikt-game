import * as React from "react";

function SvgPc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} {...props}>
      <defs>
        <style>
          {
            ".PC_svg__a{fill:#fff}.PC_svg__a,.PC_svg__b,.PC_svg__c{stroke:#20588f;stroke-width:3px}.PC_svg__b,.PC_svg__f{fill:none}.PC_svg__b{stroke-linecap:round}.PC_svg__c{fill:#ceddea}.PC_svg__e{stroke:none}"
          }
        </style>
      </defs>
      <g className="PC_svg__a" transform="translate(40.109)">
        <rect className="PC_svg__e" width={49.891} height={90} rx={8} />
        <rect
          className="PC_svg__f"
          x={1.5}
          y={1.5}
          width={46.891}
          height={87}
          rx={6.5}
        />
      </g>
      <path
        className="PC_svg__b"
        d="M80.455 73.35v7.2M75.909 73.35v7.2M54.091 12.15h27.273"
      />
      <g className="PC_svg__c" transform="translate(72.391 20.543)">
        <circle className="PC_svg__e" cx={5.38} cy={5.38} r={5.38} />
        <circle className="PC_svg__f" cx={5.38} cy={5.38} r={3.88} />
      </g>
      <g className="PC_svg__c" transform="translate(72.391 36.196)">
        <circle className="PC_svg__e" cx={5.38} cy={5.38} r={5.38} />
        <circle className="PC_svg__f" cx={5.38} cy={5.38} r={3.88} />
      </g>
      <g className="PC_svg__a" transform="translate(0 20.543)">
        <rect className="PC_svg__e" width={68.478} height={52.826} rx={8} />
        <rect
          className="PC_svg__f"
          x={1.5}
          y={1.5}
          width={65.478}
          height={49.826}
          rx={6.5}
        />
      </g>
      <g className="PC_svg__a">
        <path className="PC_svg__e" d="M25.435 71.413h17.609V90H25.435z" />
        <path className="PC_svg__f" d="M26.935 72.913h14.609V88.5H26.935z" />
      </g>
      <g className="PC_svg__a" transform="translate(15.652 81.196)">
        <rect className="PC_svg__e" width={36.196} height={8.804} rx={4.402} />
        <rect
          className="PC_svg__f"
          x={1.5}
          y={1.5}
          width={33.196}
          height={5.804}
          rx={2.902}
        />
      </g>
      <path
        fill="none"
        stroke="#20588f"
        strokeWidth={3}
        d="M1.364 64.35h65.455"
      />
      <path
        className="PC_svg__b"
        d="M15.909 28.35l-8.182 8.1M25 28.35L7.727 45.45"
      />
    </svg>
  );
}

export default SvgPc;

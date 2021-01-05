import * as React from "react";

function SvgRouter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={81} height={29} {...props}>
      <defs>
        <style>
          {
            ".Router_svg__c{fill:#ceddea}.Router_svg__d{fill:#20588f}.Router_svg__e{stroke:none}.Router_svg__f{fill:none}"
          }
        </style>
      </defs>
      <g stroke="#20588f" strokeWidth={3} fill="#fff">
        <rect className="Router_svg__e" width={81} height={29} rx={7} />
        <rect
          className="Router_svg__f"
          x={1.5}
          y={1.5}
          width={78}
          height={26}
          rx={5.5}
        />
      </g>
      <g
        transform="translate(8 8)"
        fill="#ceddea"
        stroke="#20588f"
        strokeWidth={3}
      >
        <circle className="Router_svg__e" cx={7} cy={7} r={7} />
        <circle className="Router_svg__f" cx={7} cy={7} r={5.5} />
      </g>
      <circle
        className="Router_svg__c"
        cx={3.5}
        cy={3.5}
        r={3.5}
        transform="translate(31 11)"
      />
      <circle
        className="Router_svg__d"
        cx={3.5}
        cy={3.5}
        r={3.5}
        transform="translate(42 11)"
      />
      <circle
        className="Router_svg__d"
        cx={3.5}
        cy={3.5}
        r={3.5}
        transform="translate(53 11)"
      />
      <circle
        className="Router_svg__c"
        cx={3.5}
        cy={3.5}
        r={3.5}
        transform="translate(64 11)"
      />
    </svg>
  );
}

export default SvgRouter;

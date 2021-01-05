import * as React from "react";

function SvgSwitcher(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={81} height={38} {...props}>
      <defs>
        <style>
          {
            ".Switcher_svg__b,.Switcher_svg__c{stroke:#20588f;stroke-width:3px}.Switcher_svg__b{fill:#ceddea}.Switcher_svg__c,.Switcher_svg__e{fill:none}.Switcher_svg__c{stroke-linecap:round}.Switcher_svg__d{stroke:none}"
          }
        </style>
      </defs>
      <g stroke="#20588f" strokeWidth={3} fill="#fff">
        <rect className="Switcher_svg__d" width={81} height={38} rx={8} />
        <rect
          className="Switcher_svg__e"
          x={1.5}
          y={1.5}
          width={78}
          height={35}
          rx={6.5}
        />
      </g>
      <g className="Switcher_svg__b" transform="translate(8 17)">
        <rect className="Switcher_svg__d" width={14} height={14} rx={2} />
        <rect
          className="Switcher_svg__e"
          x={1.5}
          y={1.5}
          width={11}
          height={11}
          rx={0.5}
        />
      </g>
      <g className="Switcher_svg__b" transform="translate(25 17)">
        <rect className="Switcher_svg__d" width={14} height={14} rx={2} />
        <rect
          className="Switcher_svg__e"
          x={1.5}
          y={1.5}
          width={11}
          height={11}
          rx={0.5}
        />
      </g>
      <g className="Switcher_svg__b" transform="translate(42 17)">
        <rect className="Switcher_svg__d" width={14} height={14} rx={2} />
        <rect
          className="Switcher_svg__e"
          x={1.5}
          y={1.5}
          width={11}
          height={11}
          rx={0.5}
        />
      </g>
      <g className="Switcher_svg__b" transform="translate(59 17)">
        <rect className="Switcher_svg__d" width={14} height={14} rx={2} />
        <rect
          className="Switcher_svg__e"
          x={1.5}
          y={1.5}
          width={11}
          height={11}
          rx={0.5}
        />
      </g>
      <path
        className="Switcher_svg__c"
        d="M27.5 10.279h43M10.355 10.428H19.5"
      />
    </svg>
  );
}

export default SvgSwitcher;

import * as React from "react";

function SvgWind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={183.903}
      height={57.539}
      {...props}
    >
      <defs>
        <style>
          {
            ".Wind_svg__a,.Wind_svg__b{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}.Wind_svg__a{stroke:#fff;stroke-dasharray:12}.Wind_svg__b{stroke:#20588f}"
          }
        </style>
      </defs>
      <path className="Wind_svg__a" d="M128.73 28.77H14.415" />
      <path
        className="Wind_svg__b"
        d="M26.919 46.393l-25.399.339M138.837 46.732l-19.535-.339"
      />
      <path className="Wind_svg__a" d="M103.637 56.039H44.373" />
      <path
        className="Wind_svg__b"
        d="M182.403 28.77h-39.326M105.032 1.5H65.706"
      />
    </svg>
  );
}

export default SvgWind;

import * as React from "react";

function SvgFrame2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1212.788}
      height={700.669}
      {...props}
    >
      <defs>
        <style>
          {
            ".frame_2_svg__a{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
          }
        </style>
      </defs>
      <path
        className="frame_2_svg__a"
        d="M1.718 699.169L1.5 155.547l345.668-84.77v61h148.2v158.814h59.35"
      />
      <path
        className="frame_2_svg__a"
        d="M1211.287 698.889V98.62L563.187 1.5v289.152h-16.09"
      />
    </svg>
  );
}

export default SvgFrame2;

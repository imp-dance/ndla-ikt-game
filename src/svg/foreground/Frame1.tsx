import * as React from "react";

function SvgFrame1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1175.382}
      height={682.047}
      {...props}
    >
      <defs>
        <style>
          {
            ".frame_1_svg__a{fill:none;stroke:#20588f;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
          }
        </style>
      </defs>
      <path
        className="frame_1_svg__a"
        d="M529.4 591.387h-31.311v88.98H1.5V152.674L348.285 67v64.934h149.8v69.994l-.051 85.792h28.316"
      />
      <path
        className="frame_1_svg__a"
        d="M529.446 591.589v88.963l644.4-.254.034-584.8-647-93.993v286.231"
      />
    </svg>
  );
}

export default SvgFrame1;

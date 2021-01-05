import * as React from "react";

function SvgSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={115.328}
      height={115.329}
      {...props}
    >
      <defs>
        <style>
          {
            ".Sun_svg__c{stroke:#20588f}.Sun_svg__b,.Sun_svg__c{stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;fill:none}.Sun_svg__b{stroke:#fff;stroke-dasharray:2 8}"
          }
        </style>
      </defs>
      <g transform="translate(1.914 1.914)">
        <circle
          cx={27.394}
          cy={27.394}
          transform="rotate(-76.717 60.094 24.139)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          stroke="#20588f"
          fill="#fde1c8"
          r={27.394}
        />
        <path
          className="Sun_svg__b"
          d="M55.75 20.505V7.369M55.75 104.13V90.994M80.671 30.829l9.289-9.289M21.54 89.96l9.289-9.289M90.994 55.75h13.136M7.369 55.75h13.137M80.671 80.671l9.289 9.289M21.54 21.54l9.289 9.289"
        />
        <path
          className="Sun_svg__c"
          d="M70.116 15.138L75.471 0M36.03 111.5l5.355-15.138M94.625 37.191l14.49-6.918M2.384 81.227l14.49-6.918M96.362 70.116l15.138 5.355M0 36.03l15.138 5.355M74.309 94.626l6.918 14.49M30.273 2.385l6.918 14.49"
        />
      </g>
    </svg>
  );
}

export default SvgSun;

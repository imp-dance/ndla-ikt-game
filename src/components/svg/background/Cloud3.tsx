import * as React from "react";

function SvgCloud3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={334.035}
      height={79.74}
      {...props}
    >
      <defs>
        <style>
          {
            ".Cloud_3_svg__c{stroke-linecap:round;stroke-width:3px;stroke-miterlimit:10;fill:none;stroke:#fff}"
          }
        </style>
      </defs>
      <path
        d="M112.768 58.627H55.127a16.341 16.341 0 0125.01-18.657 24.145 24.145 0 0141.783-8.06 45.66 45.66 0 0185.258-2.138 32.546 32.546 0 0152.6 9.7 16.337 16.337 0 0124.29 19.155H152.897"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeWidth={3}
        fill="#fff"
        stroke="#20588f"
        strokeLinejoin="round"
      />
      <path
        d="M266.232 78.239H150.124"
        strokeDasharray={12}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={3}
      />
      <path
        className="Cloud_3_svg__c"
        d="M37.954 58.627L1.515 59M332.515 59l-28.026-.373M133.197 69.239H94.993"
      />
    </svg>
  );
}

export default SvgCloud3;

import * as React from "react";

function SvgCloud2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={246.059}
      height={59.627}
      {...props}
    >
      <defs>
        <style>
          {
            ".Cloud_2_svg__c{stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;fill:none;stroke:#fff}"
          }
        </style>
      </defs>
      <path
        d="M167.753 45.498h45.344a12.587 12.587 0 00-11.806-16.768 12.387 12.387 0 00-7.33 2.4 18.428 18.428 0 00-31.972-6.206 34.856 34.856 0 00-65.236-1.654 24.818 24.818 0 00-40.246 7.472 12.4 12.4 0 00-6.779-2.016 12.581 12.581 0 00-11.805 16.768l100.48.956"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        fill="#fff"
        stroke="#20588f"
        strokeLinejoin="round"
      />
      <path
        strokeDasharray={12}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M51.572 58.127h73.941"
      />
      <path
        className="Cloud_2_svg__c"
        d="M227.625 45.498h16.934M1.5 45.498h12.713M153.366 58.127h29.232"
      />
    </svg>
  );
}

export default SvgCloud2;

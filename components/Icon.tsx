import type { SVGProps } from "react";

const paths = {
  house: "M3 12 12 3l9 9M5 10v10h14V10M9 20v-6h6v6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  diagonal: "M6 18 18 6M6 6h12v12",
  sun: "M12 3V1m0 22v-2M3 12H1m22 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  moon: "M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z",
  pause: "M8 5v14M16 5v14",
  play: "m8 4 12 8-12 8V4Z",
  grid: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
  pointer: "m4 3 5 18 3-8 8-3L4 3Zm8 10 7 7",
  book: "M12 5c-3-2-7-2-10-1v15c3-1 7-1 10 1m0-15c3-2 7-2 10-1v15c-3-1-7-1-10 1V5Z",
  plus: "M12 5v14M5 12h14",
  check: "m5 12 4 4L19 6",
} as const;

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}

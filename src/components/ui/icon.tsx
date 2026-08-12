export type IconName =
  | "fork"
  | "icecream"
  | "wheat"
  | "mansion"
  | "clock"
  | "pin"
  | "phone"
  | "arrow"
  | "star"
  | "check"
  | "quote"
  | "gift"
  | "truck"
  | "plus"
  | "minus"
  | "instagram"
  | "facebook"
  | "linktree"
  | "leaf"
  | "sparkle";

const paths: Record<IconName, React.ReactNode> = {
  fork: (
    <>
      <path d="M7 3v6" />
      <path d="M7 12v9" />
      <path d="M11 3v7c0 1.4-1.3 2-2.4 2.5" />
      <path d="M16 3v9" />
      <path d="M16 3c2 .6 3.5 2 3.5 4.5S16 12 16 12" transform="translate(0 0)" />
    </>
  ),
  icecream: (
    <>
      <path d="M12 3c3 0 5.5 2.4 5.5 5.4 0 1.5-.6 2.9-1.6 3.9l-7.8 8-3-3.6 7.3-6.3" transform="rotate(0)" />
      <path d="M5.6 18.3 8.5 15" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 21V11" />
      <path d="M12 11c-2-1.5-3-3.5-3-6 2-1 4 0 3 3" />
      <path d="M12 11c1.5-2 3.5-3 6-3 1 2 0 4-3 3" />
      <path d="M12 7c-1.5-2-3-3-5-3 0 2 1 4 3 4.6" />
      <path d="M12 7c1.6-1.6 3.4-2.4 5-3-.3 2-1.6 3.4-3.5 4" />
    </>
  ),
  mansion: (
    <>
      <path d="M3 12 12 4l9 8" />
      <path d="M5 10.5V21h14V1t0" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 21h16" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.5C18.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  phone: (
    <path d="M5 4h4l1.5 4.5-2.2 1.8a13 13 0 0 0 5.4 5.4l1.8-2.2L20 15v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  ),
  arrow: <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  star: (
    <path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17.2 11 20l-1.1-5.2-4.6-4.3 6.3-.8L12 3Z" fill="currentColor" stroke="none" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  quote: (
    <path d="M7 16c-2-1-3-3-3-5.5C4 8 6 6 8.5 6c.5 0 1 .05 1.3.2C8 7.5 8 9.5 8 11h3v6H7Z M16.5 16c-2-1-3-3.5-3-5.5 0-2.5 2-4.5 4.5-4.5.5 0 1 .05 1.3.2-.8 1.3-.8 3.3-.8 4.8h3v6h-5z" transform="scale(.95) translate(.5 .8)" fill="currentColor" stroke="none" />
  ),
  gift: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="1" />
      <path d="M12 10v10" />
      <path d="M3 6.5h18V10H3z" />
      <path d="M12 10c-1.5-1.8-4-2-5.5-.5 1.6.9 4.2.8 5.5.5Z" transform="translate(0 -1)" />
      <path d="M12 10c1.5-1.8 4-2 5.5-.5C15.9 10.4 13.3 10.2 12 10Z" transform="translate(0 -1)" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h10v10H3z" />
      <path d="M13 9h4l3 3.2V16h-7z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.4" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14 8.5V6.6c0-.8.6-1 1-1h1V3h-2.4C11 3 10.5 4.8 10.5 6.5V8.5H8V11h2.5v8H14v-8h2l.5-3z" fill="currentColor" stroke="none" />
  ),
  linktree: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v6" />
      <path d="m6 12 6 6 6-6" />
      <path d="M12 20v-2" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20C4 10 11 4 21 4c0 10-7 16-17 16Z" />
      <path d="M4 16c4-2 7-5 9-9" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6Z" fill="currentColor" stroke="none" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8Z" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
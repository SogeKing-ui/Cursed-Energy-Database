const PATHS = {
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4c2 .7 3.5 2.6 3.5 5.6" /></>,
  skull: <><path d="M12 3C7.6 3 4.5 6 4.5 10c0 2.3 1 4 2.5 5v3.5h10V15c1.5-1 2.5-2.7 2.5-5 0-4-3.1-7-7.5-7z" /><circle cx="9" cy="10.5" r="1.2" /><circle cx="15" cy="10.5" r="1.2" /><path d="M10 18.5v2M14 18.5v2" /></>,
  domain: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  heart: <path d="M12 20.5S3.5 15 3.5 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.5 2.6C20.5 15 12 20.5 12 20.5z" />,
  bolt: <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z" />,
  home: <><path d="M3.5 11 12 4l8.5 7" /><path d="M5.5 9.5V20h13V9.5" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
};

function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export default Icon;

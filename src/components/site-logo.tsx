type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoStroke" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="27" stroke="url(#logoStroke)" strokeWidth="2.5" />
      <path
        d="M19 43V21.5L32 38L45 21.5V43"
        stroke="url(#logoStroke)"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 24H40" stroke="url(#logoStroke)" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="32" cy="32" r="2.25" fill="#10B981" />
    </svg>
  );
}

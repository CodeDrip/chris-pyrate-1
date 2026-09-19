interface BlossomProps {
  className?: string;
  /** which flower artwork to show: 1 = pink full bloom, 2 = pink star center, 3 = lavender */
  variant?: 1 | 2 | 3;
}

/**
 * The signature flower — original Chris Pyrate artwork.
 * Lives in public/images/flower-{1,2,3}.png; swap those files to re-skin the site.
 */
export default function Blossom({ className = "", variant = 2 }: BlossomProps) {
  return (
    <img
      src={`/images/flower-${variant}.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`select-none ${className}`}
    />
  );
}

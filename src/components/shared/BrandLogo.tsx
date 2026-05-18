import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  height?: number;
  inverted?: boolean;
  width?: number;
};

/**
 * All In Advertising logo — inline SVG.
 * Set inverted=true for the white version on dark backgrounds.
 */
export function BrandLogo({
  className = "",
  height = 58,
  inverted = false,
  width = 260,
}: BrandLogoProps) {
  return (
    <Image
      alt="All In Advertising"
      className={`${inverted ? "brightness-0 invert opacity-96" : ""} ${className}`}
      height={height}
      priority={inverted}
      src="/all-in-advertising-logo.svg"
      style={{ height, width: "auto", maxWidth: width }}
      width={width}
    />
  );
}

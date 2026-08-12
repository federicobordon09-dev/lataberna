import Link from "next/link";

type Props = {
  href: string;
  external?: boolean;
  variant?: "primary" | "ghost" | "cream";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export function CtaLink({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: Props) {
  const sizes =
    size === "lg" ? "h-13 px-7 text-base" : "h-11 px-6 text-sm";
  const variantClass =
    variant === "ghost"
      ? "btn-ghost"
      : variant === "cream"
        ? "btn-cream"
        : "btn-wine";
  const cls = `btn ${variantClass} ${sizes} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
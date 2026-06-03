import Link from "next/link";

type Variant = "primary" | "secondary" | "wood" | "ghost";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  id?: string;
  external?: boolean;
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  wood:      "btn-wood",
  ghost:     "btn-ghost",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  id,
  external = false,
}: CTAButtonProps) {
  const cls = `${VARIANT_CLASS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} id={id} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} id={id}>
      {children}
    </Link>
  );
}

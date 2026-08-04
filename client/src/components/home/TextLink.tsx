import { ArrowRight } from "lucide-react";

export default function TextLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a className={`text-link ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
    </a>
  );
}

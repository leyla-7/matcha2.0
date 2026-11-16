import type { AnchorHTMLAttributes, JSX, ReactNode } from "react";
import "../Button/Button.css";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
}

export default function ButtonLink({
  href,
  variant,
  children,
  className = "",
  ...rest
}: ButtonLinkProps): JSX.Element {
  return (
    <a
      className={`my-button ${variant} ${className}`.trim()}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
}

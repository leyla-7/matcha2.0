import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({
  variant,
  children,
  className = "",
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button className={`my-button ${variant} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}

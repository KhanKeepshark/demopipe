import type { ReactElement } from "react";

export interface NavLinkProps {
  to: string;
  text: string;
}

export interface NavButtonProps extends NavLinkProps {}

export interface ButtonProps {
  children: ReactElement | string;
  className?: string;
  variant?: string;
  onClick?: () => void;
}

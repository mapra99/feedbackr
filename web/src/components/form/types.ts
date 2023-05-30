import type { ReactNode, FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  icon?: ReactNode;
  children: ReactNode
}

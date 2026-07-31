import type React from "preact/compat";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className="btn-why">{children}</button>;
}

import type { ReactNode } from "react";

/** Renders children as-is until auth logic is implemented. */
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  return children;
};

export default ProtectedRoute;

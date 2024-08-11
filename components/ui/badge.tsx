import { FC, ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <p className="w-max px-2 py-1 rounded-full bg-gray-200 text-xs font-light">
      {children}
    </p>
  );
};

export default Badge;

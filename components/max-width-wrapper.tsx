import { cn } from "@/lib/utils";
import { FC } from "react";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-5", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, forwardRef, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-90",
        secondary: "bg-primary/10 text-primary hover:bg-primary/20",
        outline:
          "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
        "outline-white":
          "bg-transparent text-white border border-white hover:bg-primary hover:text-white",
        link: "bg-none hover:bg-transparent hover:underline text-primary hover:bg-primary/20",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leading?: any;
  children: ReactNode;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      leading: Leading,
      size,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        disabled={isLoading}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading ? <Loader2 size={15} className="mr-2 animate-spin" /> : null}
        {Leading && !isLoading ? <Leading className="mr-2" /> : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

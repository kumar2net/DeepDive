import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] touch-manipulation",
	{
		variants: {
			variant: {
				default: "bg-gradient-primary text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5",
				destructive:
					"bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg hover:-translate-y-0.5",
				outline:
					"border-2 border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/40 hover:shadow-md",
				secondary:
					"bg-gradient-to-r from-secondary to-secondary/80 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
				ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:shadow-sm",
				link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
				gradient: "bg-gradient-accent text-white shadow-lg hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5",
				glass: "glass text-foreground border border-border/50 hover:bg-background/80 hover:shadow-lg",
			},
			size: {
				default: "h-11 px-5 py-2.5 text-base",
				sm: "h-9 rounded-lg px-4 text-sm",
				lg: "h-12 rounded-xl px-8 text-lg",
				xl: "h-14 rounded-2xl px-10 text-lg",
				icon: "h-10 w-10 rounded-xl",
				iconSm: "h-8 w-8 rounded-lg",
				iconLg: "h-12 w-12 rounded-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled || loading}
				{...props}
			>
				{loading ? (
					<>
						<svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						<span>Loading...</span>
					</>
				) : children}
			</Comp>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };

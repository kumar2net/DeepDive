"use client";

import { Component, ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<Alert variant="destructive" className="my-4">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Something went wrong</AlertTitle>
					<AlertDescription>
						<div className="space-y-2">
							<p>An error occurred while loading this component.</p>
							<Button
								variant="outline"
								size="sm"
								onClick={() => this.setState({ hasError: false, error: undefined })}
								className="flex items-center gap-2"
							>
								<RefreshCw className="h-4 w-4" />
								Try Again
							</Button>
						</div>
					</AlertDescription>
				</Alert>
			);
		}

		return this.props.children;
	}
}

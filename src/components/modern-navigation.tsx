"use client";

import Link from "next/link";
import { useState } from "react";
import { concepts, topics } from "@/lib/concepts";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, GraduationCap, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModernNavigationProps {
	currentTopicId: string;
}

export function ModernNavigation({ currentTopicId }: ModernNavigationProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 md:h-20">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-primary shadow-lg flex items-center justify-center">
							<GraduationCap className="text-white w-6 h-6 md:w-7 md:h-7" />
						</div>
						<div>
							<span className="font-headline text-lg md:text-xl font-bold gradient-text">
								Deep Dive
							</span>
							<p className="text-xs text-muted-foreground hidden md:block">
								Learn Smarter, Not Harder
							</p>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{topics.map((topic) => (
							<div
								key={topic.id}
								className="relative group"
								onMouseEnter={() => setActiveDropdown(topic.id)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors">
									{topic.icon && <topic.icon className="w-4 h-4" />}
									<span>{topic.title}</span>
									<ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
								</button>
								
								{/* Dropdown Menu */}
								{activeDropdown === topic.id && (
									<div className="absolute top-full left-0 mt-2 w-80 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl">
										<div className="p-4">
											<div className="flex items-center gap-2 mb-3">
												{topic.icon && <topic.icon className="w-5 h-5 text-primary" />}
												<h3 className="font-semibold text-foreground">{topic.title}</h3>
											</div>
											<div className="space-y-2">
												{topic.concepts.map((concept) => (
													<Link
														key={concept.id}
														href={`/?topic=${concept.id}`}
														onClick={() => setActiveDropdown(null)}
														className={cn(
															"flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
															currentTopicId === concept.id
																? "bg-gradient-primary text-white shadow-md"
																: "hover:bg-muted/50 hover:translate-x-1"
														)}
													>
														{concept.icon && (
															<div className={cn(
																"w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
																currentTopicId === concept.id
																	? "bg-white/20"
																	: "bg-primary/10"
															)}>
																<concept.icon className={cn(
																	"w-4 h-4",
																	currentTopicId === concept.id
																		? "text-white"
																		: "text-primary"
																)} />
															</div>
														)}
														<span className="font-medium">{concept.title}</span>
														{currentTopicId === concept.id && (
															<div className="ml-auto w-2 h-2 bg-white rounded-full" />
														)}
													</Link>
												))}
											</div>
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden rounded-xl"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl mt-2 shadow-xl">
							{topics.map((topic) => (
								<div key={topic.id} className="space-y-2">
									<div className="flex items-center gap-2 px-3 py-2">
										{topic.icon && <topic.icon className="w-4 h-4 text-primary" />}
										<span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
											{topic.title}
										</span>
									</div>
									<div className="space-y-1 pl-4">
										{topic.concepts.map((concept) => (
											<Link
												key={concept.id}
												href={`/?topic=${concept.id}`}
												onClick={closeMenu}
												className={cn(
													"flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
													currentTopicId === concept.id
														? "bg-gradient-primary text-white shadow-md"
														: "hover:bg-muted/50"
												)}
											>
												{concept.icon && (
													<div className={cn(
														"w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
														currentTopicId === concept.id
															? "bg-white/20"
															: "bg-primary/10"
													)}>
														<concept.icon className={cn(
															"w-4 h-4",
															currentTopicId === concept.id
																? "text-white"
																: "text-primary"
														)} />
													</div>
												)}
												<span className="font-medium">{concept.title}</span>
												{currentTopicId === concept.id && (
													<div className="ml-auto w-2 h-2 bg-white rounded-full" />
												)}
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

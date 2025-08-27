import { Button } from "./ui/button";
import { Menu, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-primary">WorkplacePro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Solutions
              </a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#cases" className="text-foreground/80 hover:text-foreground transition-colors">
                Cases
              </a>
              <a href="#mentorship" className="text-foreground/80 hover:text-foreground transition-colors">
                Mentorship
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
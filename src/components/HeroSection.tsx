import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Transform Your{" "}
                <span className="text-primary">Workplace</span>{" "}
                Challenges Into{" "}
                <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Connect with experienced mentors, access proven solutions, and share your own expertise. 
                Build a thriving workplace culture through community-driven insights and professional guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Start Solving Issues
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Active Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/30 p-8 flex items-center justify-center">
              <ImageWithFallback
                src="/api/placeholder/500/500"
                alt="Workplace collaboration illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
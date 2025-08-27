import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Users, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of professionals who are already solving challenges, 
                scaling their businesses, and building better workplaces together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Browse Solutions
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Find Your Mentor</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with experienced professionals in your industry
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Share Your Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Help others by sharing your experiences and solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
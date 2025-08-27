import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Users, Lightbulb, Share2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Identify Your Challenge",
      description: "Post your workplace issue or browse existing cases to find similar situations."
    },
    {
      icon: Users,
      number: "02", 
      title: "Connect with Experts",
      description: "Get matched with mentors and professionals who have solved similar challenges."
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Receive Guidance",
      description: "Access personalized advice, proven frameworks, and step-by-step solutions."
    },
    {
      icon: Share2,
      number: "04",
      title: "Share Your Success",
      description: "Document your journey and help others by creating case studies and playbooks."
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">Process</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process helps you transform workplace challenges into learning opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative group bg-background border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
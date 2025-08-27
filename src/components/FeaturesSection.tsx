import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MessageCircle, Users, BookOpen, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Resolve Workplace Issues",
      description: "Get expert guidance on complex workplace challenges through our community of experienced professionals.",
      badge: "Problem Solving",
      benefits: ["Conflict Resolution", "Policy Guidance", "Communication Issues", "Team Dynamics"]
    },
    {
      icon: TrendingUp,
      title: "Scale Up Support",
      description: "Access proven strategies and frameworks to grow your business and scale your operations effectively.",
      badge: "Growth",
      benefits: ["Strategic Planning", "Process Optimization", "Team Building", "Resource Management"]
    },
    {
      icon: Users,
      title: "Mentor Network",
      description: "Connect with industry leaders and experienced professionals who can guide your career and business journey.",
      badge: "Mentorship",
      benefits: ["1-on-1 Sessions", "Career Guidance", "Skill Development", "Network Building"]
    },
    {
      icon: BookOpen,
      title: "Cases & Playbooks",
      description: "Learn from real-world experiences and share your own success stories through detailed case studies.",
      badge: "Knowledge Base",
      benefits: ["Real Case Studies", "Step-by-step Guides", "Best Practices", "Lessons Learned"]
    }
  ];

  return (
    <section id="features" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">Our Solutions</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From resolving daily challenges to scaling your business, our platform provides comprehensive support for workplace success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs w-fit">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
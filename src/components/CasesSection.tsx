import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Clock, Eye, Heart, ArrowRight } from "lucide-react";

export function CasesSection() {
  const cases = [
    {
      id: 1,
      title: "Resolving Remote Team Communication Issues",
      description: "A comprehensive playbook on improving communication in distributed teams, including tools, processes, and cultural changes.",
      category: "Communication",
      author: {
        name: "Sarah Chen",
        role: "VP of Engineering",
        avatar: "/api/placeholder/40/40"
      },
      stats: {
        views: 2400,
        likes: 89, 
        readTime: "8 min"
      },
      tags: ["Remote Work", "Team Management", "Communication"]
    },
    {
      id: 2,
      title: "Scaling Engineering Team from 5 to 50",
      description: "Lessons learned and strategies used to successfully scale an engineering organization while maintaining culture and quality.",
      category: "Scaling",
      author: {
        name: "David Park",
        role: "CTO",
        avatar: "/api/placeholder/40/40"
      },
      stats: {
        views: 3200,
        likes: 156,
        readTime: "12 min"
      },
      tags: ["Scaling", "Hiring", "Engineering"]
    },
    {
      id: 3,
      title: "Handling Difficult Workplace Conversations",
      description: "A framework for navigating challenging discussions with empathy, clarity, and positive outcomes.",
      category: "Conflict Resolution",
      author: {
        name: "Maya Patel",
        role: "HR Director",
        avatar: "/api/placeholder/40/40"
      },
      stats: {
        views: 1800,
        likes: 94,
        readTime: "6 min"
      },
      tags: ["HR", "Communication", "Conflict Resolution"]
    }
  ];

  return (
    <section id="cases" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">Knowledge Base</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Featured Cases & Playbooks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn from real-world experiences and proven solutions shared by industry professionals.
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All Cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((case_, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {case_.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {case_.stats.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {case_.stats.likes}
                    </div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {case_.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {case_.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {case_.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={case_.author.avatar} alt={case_.author.name} />
                      <AvatarFallback>{case_.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{case_.author.name}</div>
                      <div className="text-xs text-muted-foreground">{case_.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {case_.stats.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:hidden">
          <Button variant="outline">
            View All Cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function MentorsSection() {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp",
      expertise: ["Leadership", "Scaling Teams", "Remote Work"],
      rating: 4.9,
      sessions: 127,
      responseTime: "< 2 hours",
      avatar: "/api/placeholder/60/60",
      available: true,
      bio: "15+ years experience scaling engineering teams from startup to IPO"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Head of People Ops",
      company: "GrowthLabs",
      expertise: ["HR Strategy", "Conflict Resolution", "Culture Building"],
      rating: 4.8,
      sessions: 203,
      responseTime: "< 4 hours",
      avatar: "/api/placeholder/60/60",
      available: true,
      bio: "Specialist in building inclusive workplace cultures and resolving complex HR issues"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Business Development Director",
      company: "Scale Ventures",
      expertise: ["Business Strategy", "Sales Operations", "Market Expansion"],
      rating: 4.9,
      sessions: 89,
      responseTime: "< 1 hour",
      avatar: "/api/placeholder/60/60",
      available: false,
      bio: "Expert in rapid business scaling and go-to-market strategies"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Mentors</h2>
          <p className="text-muted-foreground">Connect with experienced professionals</p>
        </div>
        <Button variant="outline">
          View All Mentors
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {mentor.role} at {mentor.company}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant={mentor.available ? "default" : "secondary"}>
                  {mentor.available ? "Available" : "Busy"}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {mentor.bio}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{mentor.rating}</span>
                  <span>({mentor.sessions} sessions)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{mentor.responseTime}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button className="flex-1" disabled={!mentor.available}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button variant="outline" disabled={!mentor.available}>
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
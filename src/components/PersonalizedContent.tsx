import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Clock, Eye, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";

export function PersonalizedContent() {
  const recommendedContent = [
    {
      id: 1,
      title: "Building High-Performance Remote Teams",
      description: "Complete guide to managing distributed teams effectively with proven frameworks and tools.",
      category: "Team Management",
      author: {
        name: "Alex Kim",
        role: "Engineering Manager",
        avatar: "/api/placeholder/32/32"
      },
      stats: {
        views: 1540,
        likes: 78,
        readTime: "15 min"
      },
      tags: ["Remote Work", "Team Building", "Management"],
      type: "playbook"
    },
    {
      id: 2,
      title: "Resolving Cross-Department Conflicts",
      description: "Real case study of how we resolved a major conflict between sales and engineering teams.",
      category: "Conflict Resolution",
      author: {
        name: "Maria Santos",
        role: "Operations Director",
        avatar: "/api/placeholder/32/32"
      },
      stats: {
        views: 890,
        likes: 45,
        readTime: "8 min"
      },
      tags: ["Conflict Resolution", "Communication", "Process"],
      type: "case"
    },
    {
      id: 3,
      title: "Scaling Customer Support 10x",
      description: "How we grew our support team from 3 to 30 people while improving response times.",
      category: "Scaling",
      author: {
        name: "James Wilson",
        role: "Head of Support",
        avatar: "/api/placeholder/32/32"
      },
      stats: {
        views: 2100,
        likes: 112,
        readTime: "12 min"
      },
      tags: ["Scaling", "Customer Support", "Hiring"],
      type: "case"
    }
  ];

  const savedContent = [
    {
      id: 1,
      title: "Effective 1-on-1 Meeting Templates",
      category: "Management",
      savedDate: "2 days ago",
      type: "playbook"
    },
    {
      id: 2,
      title: "Handling Difficult Customer Situations",
      category: "Customer Service",
      savedDate: "1 week ago",
      type: "case"
    },
    {
      id: 3,
      title: "Performance Review Best Practices",
      category: "HR",
      savedDate: "2 weeks ago",
      type: "playbook"
    }
  ];

  const myContent = [
    {
      id: 1,
      title: "Implementing Agile in a Traditional Company",
      status: "Published",
      views: 234,
      likes: 18,
      publishDate: "1 week ago",
      type: "case"
    },
    {
      id: 2,
      title: "Remote Onboarding Checklist",
      status: "Draft",
      views: 0,
      likes: 0,
      publishDate: "Draft",
      type: "playbook"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Content Library</h2>
          <p className="text-muted-foreground">Discover, save, and create valuable workplace content</p>
        </div>
      </div>

      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="my-content">My Content</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedContent.map((content) => (
              <Card key={content.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {content.category}
                    </Badge>
                    <Badge variant={content.type === 'case' ? 'default' : 'secondary'} className="text-xs">
                      {content.type === 'case' ? 'Case Study' : 'Playbook'}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{content.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{content.stats.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{content.stats.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={content.author.avatar} alt={content.author.name} />
                        <AvatarFallback className="text-xs">
                          {content.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xs font-medium">{content.author.name}</div>
                        <div className="text-xs text-muted-foreground">{content.author.role}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="space-y-4">
            {savedContent.map((content) => (
              <Card key={content.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{content.category}</Badge>
                          <Badge variant="secondary" className="text-xs">
                            {content.type === 'case' ? 'Case Study' : 'Playbook'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Saved {content.savedDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Open
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-content" className="mt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Content you've created and shared</p>
              <Button>
                <BookOpen className="mr-2 h-4 w-4" />
                Create New
              </Button>
            </div>
            
            {myContent.map((content) => (
              <Card key={content.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <Badge 
                            variant={content.status === 'Published' ? 'default' : 'secondary'} 
                            className="text-xs"
                          >
                            {content.status}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {content.type === 'case' ? 'Case Study' : 'Playbook'}
                          </Badge>
                          {content.status === 'Published' && (
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{content.views} views</span>
                              <span>{content.likes} likes</span>
                            </div>
                          )}
                          <span className="text-xs text-muted-foreground">{content.publishDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {content.status === 'Published' ? 'View' : 'Edit'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
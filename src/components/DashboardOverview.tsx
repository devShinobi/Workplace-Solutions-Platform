import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  MessageCircle, 
  CheckCircle, 
  Clock,
  Star,
  ArrowRight
} from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Issues Resolved",
      value: "12",
      change: "+3 this month",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Mentor Sessions",
      value: "8",
      change: "+2 this week",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Cases Shared",
      value: "4",
      change: "+1 this month",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Community Points",
      value: "1,247",
      change: "+89 this week",
      icon: Star,
      color: "text-yellow-600"
    }
  ];

  const recentActivity = [
    {
      type: "mentor_session",
      title: "Mentoring session with Sarah Chen",
      description: "Discussed team scaling strategies",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "case_published",
      title: "Published: Remote Team Communication",
      description: "Your case study went live",
      time: "1 day ago",
      status: "published"
    },
    {
      type: "issue_resolved",
      title: "Issue resolved: Conflict in dev team",
      description: "Solution implemented successfully",
      time: "3 days ago",
      status: "resolved"
    },
    {
      type: "mentor_match",
      title: "New mentor match available",
      description: "Marcus Johnson wants to connect",
      time: "5 days ago",
      status: "pending"
    }
  ];

  const currentGoals = [
    {
      title: "Complete Leadership Track",
      progress: 75,
      target: "4 modules remaining"
    },
    {
      title: "Publish 2 Case Studies",
      progress: 50,
      target: "1 of 2 completed"
    },
    {
      title: "Mentor 5 People",
      progress: 40,
      target: "2 of 5 completed"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions and achievements</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Current Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Current Goals</CardTitle>
            <CardDescription>Track your progress and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{goal.title}</p>
                  <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{goal.target}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              <TrendingUp className="mr-2 h-4 w-4" />
              Set New Goal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
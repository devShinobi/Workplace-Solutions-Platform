import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Users, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Settings,
  Plus,
  Heart
} from "lucide-react";

export function DashboardSidebar() {
  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true, badge: null },
    { icon: Users, label: "Find Mentors", active: false, badge: null },
    { icon: BookOpen, label: "Cases & Playbooks", active: false, badge: "New" },
    { icon: MessageSquare, label: "My Issues", active: false, badge: "3" },
    { icon: TrendingUp, label: "Scale Up", active: false, badge: null },
    { icon: Heart, label: "Saved", active: false, badge: null },
  ];

  const quickActions = [
    { icon: MessageSquare, label: "Ask a Question" },
    { icon: BookOpen, label: "Share Experience" },
    { icon: Users, label: "Find Mentor" },
  ];

  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto p-4">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="mr-3 h-4 w-4" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant={item.badge === "New" ? "default" : "secondary"} className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </nav>
          
          <div className="mt-8">
            <h3 className="mb-4 px-3 text-sm font-medium text-muted-foreground">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <action.icon className="mr-2 h-4 w-4" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t p-4">
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>
    </aside>
  );
}
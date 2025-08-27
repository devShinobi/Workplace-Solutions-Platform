import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardOverview } from "./DashboardOverview";
import { MentorsSection } from "./MentorsSection";
import { PersonalizedContent } from "./PersonalizedContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">
                Here's what's happening in your workplace community today.
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="mentors">Mentors</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <DashboardOverview />
              </TabsContent>

              <TabsContent value="mentors" className="mt-8">
                <MentorsSection />
              </TabsContent>

              <TabsContent value="content" className="mt-8">
                <PersonalizedContent />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
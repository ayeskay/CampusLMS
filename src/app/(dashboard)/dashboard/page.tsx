// src/app/(dashboard)/dashboard/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, ListTodo } from "lucide-react";

// This is a placeholder component for individual stat cards.
// We can create this as a separate component for better organization.
function StatCard({ title, value, icon: Icon, description }: { title: string, value: string, icon: React.ElementType, description: string }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}


export default function DashboardPage() {
  // We will fetch real user data later. For now, we use a placeholder.
  const userName = "Student";

  return (
    <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-1">
             <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}!</h1>
             <p className="text-muted-foreground">Here's a summary of your academic progress.</p>
        </div>

      {/* Main Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Enrolled Courses" value="4" icon={BookOpen} description="Current semester" />
        <StatCard title="Attendance" value="92%" icon={CheckCircle} description="Overall attendance rate" />
        <StatCard title="Upcoming Deadlines" value="3" icon={Clock} description="In the next 7 days" />
        <StatCard title="Pending Tasks" value="5" icon={ListTodo} description="Across all courses" />
      </div>

      {/* Placeholder for other dashboard components */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
              <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Recent activity feed will be displayed here.</p>
              </CardContent>
          </Card>
          <Card className="col-span-3">
               <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Calendar or event list will be displayed here.</p>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}

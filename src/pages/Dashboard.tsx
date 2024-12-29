import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, DollarSign, Users, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Restaurants",
      value: "12",
      icon: Store,
      change: "+2 this month",
      changeType: "positive",
    },
    {
      title: "Total Revenue",
      value: "$48,574",
      icon: DollarSign,
      change: "+12.5% from last month",
      changeType: "positive",
    },
    {
      title: "Active Users",
      value: "245",
      icon: Users,
      change: "+18 this week",
      changeType: "positive",
    },
    {
      title: "Pending Issues",
      value: "5",
      icon: AlertCircle,
      change: "-2 from yesterday",
      changeType: "negative",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.changeType === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
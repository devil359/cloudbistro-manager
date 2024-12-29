import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Clock, RotateCcw, DollarSign } from "lucide-react";

const Restaurants = () => {
  const stats = [
    {
      title: "Items To Reorder",
      value: "0",
      icon: RefreshCcw,
    },
    {
      title: "Upcoming Reservations",
      value: "0",
      icon: Clock,
    },
    {
      title: "Pending KOT",
      value: "0",
      icon: RotateCcw,
    },
    {
      title: "Today's Revenue",
      value: "₹ 0",
      icon: DollarSign,
    },
  ];

  const quickLinks = [
    { title: "New Order", href: "#" },
    { title: "Reserve Table", href: "#" },
    { title: "Add Menu Items", href: "#" },
    { title: "Add Invoice", href: "#" },
    { title: "Update Daily Usage", href: "#" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Status Section */}
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Order Status</CardTitle>
            <Button variant="link" className="text-coral-500">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center text-muted-foreground">
              No Orders Available
            </div>
          </CardContent>
        </Card>

        {/* Quick Links Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-coral-500"
                asChild
              >
                <a href={link.href}>{link.title}</a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Revenue and Expenses Section */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Revenue</span>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Expenses</span>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Restaurants;
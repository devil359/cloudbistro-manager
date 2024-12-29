import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RefreshCcw,
  Clock,
  RotateCcw,
  DollarSign,
  Plus,
  Filter,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

  const menuItems = [
    {
      id: 1,
      name: "Vegetable Spring Roll",
      type: "Appetizer",
      price: "₹ 150",
    },
    {
      id: 2,
      name: "Chicken Tikka",
      type: "Main Course",
      price: "₹ 280",
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      type: "Main Course",
      price: "₹ 220",
    },
    {
      id: 4,
      name: "Chocolate Brownie",
      type: "Dessert",
      price: "₹ 180",
    },
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

      {/* Available Items Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Available Items</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="bg-coral-500 hover:bg-coral-600">
              <Plus className="mr-2 h-4 w-4" /> Add Item
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {menuItems.length} of {menuItems.length} items
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Restaurants;
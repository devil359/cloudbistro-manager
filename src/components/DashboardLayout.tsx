import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Store,
  Users,
  Calendar,
  Settings,
  Menu,
  ChefHat,
  Heart,
  PackageSearch,
  Package,
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  ChevronDown,
  ChevronRight,
  List,
  ListChecks,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const reservationSubMenus = [
    { icon: CalendarRange, label: "Reserve Table", path: "/reserve-table" },
    { icon: CalendarDays, label: "Reservations", path: "/reservations-list" },
    {
      icon: CalendarCheck,
      label: "Today's Reservations",
      path: "/todays-reservations",
    },
  ];

  const menuSubMenus = [
    { icon: List, label: "Available Items", path: "/available-items" },
    { icon: ListChecks, label: "All Items", path: "/all-items" },
    { icon: Plus, label: "Add Menu Items", path: "/add-menu-items" },
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Store, label: "Restaurants", path: "/restaurants" },
    { icon: ChefHat, label: "Kitchen Order Tickets", path: "/tickets" },
    {
      icon: Calendar,
      label: "Reservation",
      path: "/reservations",
      hasSubmenu: true,
      submenuItems: reservationSubMenus,
      isOpen: reservationOpen,
      setIsOpen: setReservationOpen,
    },
    { icon: Heart, label: "Customer Satisfaction", path: "/satisfaction" },
    {
      icon: Menu,
      label: "Menus",
      path: "/menus",
      hasSubmenu: true,
      submenuItems: menuSubMenus,
      isOpen: menuOpen,
      setIsOpen: setMenuOpen,
    },
    { icon: PackageSearch, label: "Suppliers", path: "/suppliers" },
    { icon: Package, label: "Inventory", path: "/inventory" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-[#1C1C28] text-white shadow-lg transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {!collapsed && (
            <span className="text-xl font-bold text-coral-500">RestaurantOS</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="space-y-2 px-2">
          {menuItems.map((item) =>
            item.hasSubmenu ? (
              <Collapsible
                key={item.path}
                open={item.isOpen}
                onOpenChange={item.setIsOpen}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between text-gray-300 hover:bg-gray-800 hover:text-white",
                      collapsed ? "px-2" : "px-4"
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-2">{item.label}</span>}
                    </div>
                    {!collapsed && (
                      <div className="ml-2">
                        {item.isOpen ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {!collapsed &&
                    item.submenuItems?.map((subItem) => (
                      <Button
                        key={subItem.path}
                        variant="ghost"
                        className="ml-6 w-[calc(100%-24px)] justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => navigate(subItem.path)}
                      >
                        <subItem.icon className="h-4 w-4" />
                        <span className="ml-2">{subItem.label}</span>
                      </Button>
                    ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                key={item.path}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white",
                  collapsed ? "px-2" : "px-4"
                )}
                onClick={() => navigate(item.path)}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            )
          )}
        </nav>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="min-h-screen bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
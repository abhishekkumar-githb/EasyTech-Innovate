import {
  Home,
  Search,
  BarChart2,
  FileText,
  ShoppingBag,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

export const sidebarConfig = {
  title: "EasyTech Innovate",
  mainMenuItems: [
    { label: "Home", title: "Home", icon: Home, path: "/dashboard" },
    { label: "Search", title: "Search", icon: Search, path: "/dashboard/search" },
    { label: "Insights", title: "Insights", icon: BarChart2, path: "/dashboard/insights" },
    { label: "Docs", icon: FileText, title: "Docs", path: "/dashboard/docs" },
    { label: "Products", icon: ShoppingBag, title: "Products", path: "/dashboard/products" },
    { label: "Messages", icon: MessageSquare, title: "Messages", path: "/dashboard/messages" },

  ],
  profileMenu: {
    main: { label: "profile", icon: User, title: "Profile", path: "/" },
    subItems: [
      { label: "settings", icon: Settings, title: "Settings", path: "/" },
    ],
  },
};

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
    { label: "Home", title: "Home", icon: Home, path: "/" },
    { label: "search", title: "Search", icon: Search, path: "/" },
    { label: "insights", title: "Insights", icon: BarChart2, path: "/" },
    { label: "docs", icon: FileText, title: "Docs", path: "/" },
    { label: "products", icon: ShoppingBag, title: "Products", path: "/" },
    { label: "messages", icon: MessageSquare, title: "Messages", path: "/" },
  ],
  profileMenu: {
    main: { label: "profile", icon: User, title: "Profile", path: "/" },
    subItems: [
      { label: "settings", icon: Settings, title: "Settings", path: "/" },
    ],
  },
};

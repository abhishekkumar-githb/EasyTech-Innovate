/* eslint-disable react/prop-types */
import { useState } from "react";
import { sidebarConfig } from "./dashboardConfig.js";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleItemClick = (itemId) => {
    setIsExpanded(true);
    setActiveItem(itemId);
    if (itemId !== "profile") {
      setIsProfileOpen(false);
    }
  };

  const handleProfileClick = () => {
    setIsExpanded(true);
    setIsProfileOpen(!isProfileOpen);
    setActiveItem("profile");
  };

  const NavItem = ({ item }) => {
    const Icon = item.icon;
    const itemId = item.label || item.id;
    return (
      <button
        onClick={() => handleItemClick(itemId)}
        className={`w-full flex items-center px-4 py-3 transition-colors duration-300
          ${activeItem === itemId 
            ? "text-[#00FFFF] bg-[#1C3144]/40" 
            : "text-gray-300 hover:bg-[#1C3144]/20 hover:text-[#00FFFF]"}`}
      >
        <span className="flex items-center justify-center min-w-[24px]">
          <Icon size={20} className={activeItem === itemId ? "text-[#FF00A6]" : ""} />
        </span>
        {isExpanded && <span className="ml-4 text-sm">{item.title}</span>}
      </button>
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gradient-to-r from-[#0A0A0A]  to-[#0A0A0A] 
        transition-all duration-300 ease-in-out flex flex-col
        ${isExpanded ? "w-64" : "w-16"}`}
    >
      {/* App Title */}
      {isExpanded && (
        <div className="px-4 py-5 flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#00FFFF] rounded-full flex items-center justify-center">
            <span className="text-[#0A0A0A] font-bold text-sm">ET</span>
          </div>
          <h1 className="text-lg font-semibold text-[#00FFFF]">{sidebarConfig.title}</h1>
        </div>
      )}

      {/* Main Navigation Items */}
      <nav className="mt-5 flex-1">
        {sidebarConfig.mainMenuItems.map((item) => (
          <NavItem key={item.label || item.id} item={item} />
        ))}
      </nav>

      {/* Profile Section with Dropdown */}
      <div className="border-t border-[#00FFFF]/20 mt-auto">
        {/* Profile Button */}
        <button
          onClick={handleProfileClick}
          className={`w-full flex items-center px-4 py-3 transition-colors duration-300
            ${activeItem === "profile" 
              ? "text-[#00FFFF] bg-[#1C3144]/40" 
              : "text-gray-300 hover:bg-[#1C3144]/20 hover:text-[#00FFFF]"}`}
        >
          <span className="flex items-center justify-center min-w-[24px]">
            <sidebarConfig.profileMenu.main.icon 
              size={20} 
              className={activeItem === "profile" ? "text-[#FF00A6]" : ""} 
            />
          </span>
          {isExpanded && (
            <span className="ml-4 text-sm">
              {sidebarConfig.profileMenu.main.title}
            </span>
          )}
        </button>

        {/* Profile Dropdown */}
        {isProfileOpen && isExpanded && (
          <div className="bg-[#1C3144]/30 text-gray-300">
            {sidebarConfig.profileMenu.subItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.label)}
                className="w-full flex items-center px-4 py-2 hover:bg-[#1C3144]/40 hover:text-[#00FFFF] transition-colors duration-300"
              >
                <span className="flex items-center justify-center min-w-[24px]">
                  <item.icon size={18} />
                </span>
                <span className="ml-4 text-sm">{item.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
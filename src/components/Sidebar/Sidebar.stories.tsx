import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { SidebarLayout, Sidebar, SidebarGroup, SidebarItem } from "./Sidebar";
import { TopBar } from "@/components/TopBar/TopBar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar/Avatar";
import { Input } from "@/components/Input/Input";
import { Badge } from "@/components/Badge/Badge";
import { LayoutDashboard, Users, Settings, FolderClosed, Bell, Search } from "lucide-react";

const meta: Meta = {
  title: "Layout/Dashboard Shell",
  decorators: [
    (Story) => (
      <div className="border border-border rounded-lg overflow-hidden h-[500px] w-full relative">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Demo: StoryObj = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("dashboard");

    return (
      <SidebarLayout>
        {/* Navigation Sidebar */}
        <Sidebar
          logo={
            <div className="flex items-center gap-2 text-primary">
              <div className="h-6 w-6 rounded bg-primary text-white flex items-center justify-center font-black">
                Ω
              </div>
              <span>Modula</span>
            </div>
          }
          footer={
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left text-xs truncate">
                <span className="font-semibold text-foreground">Jane Doe</span>
                <span className="text-muted-foreground text-[10px]">admin@modula.io</span>
              </div>
            </div>
          }
        >
          <SidebarGroup title="Platform">
            <SidebarItem
              icon={<LayoutDashboard className="h-4 w-4" />}
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              icon={<FolderClosed className="h-4 w-4" />}
              active={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </SidebarItem>
            <SidebarItem
              icon={<Users className="h-4 w-4" />}
              active={activeTab === "users"}
              onClick={() => setActiveTab("users")}
            >
              Users
            </SidebarItem>
          </SidebarGroup>

          <SidebarGroup title="System">
            <SidebarItem
              icon={<Settings className="h-4 w-4" />}
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </SidebarItem>
          </SidebarGroup>
        </Sidebar>

        {/* Content Area wrapper */}
        <div className="flex-1 flex flex-col h-full overflow-y-auto">
          {/* Top header navigation */}
          <TopBar
            leftContent={
              <div className="text-sm font-semibold capitalize text-foreground">
                Overview / {activeTab}
              </div>
            }
            rightContent={
              <div className="flex items-center gap-3">
                <Badge variant="success">Online</Badge>
                <button className="relative p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-accent transition-colors">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-destructive rounded-full" />
                </button>
              </div>
            }
          >
            <Input
              placeholder="Search assets..."
              leftIcon={<Search className="h-4 w-4" />}
              className="max-w-xs h-9"
            />
          </TopBar>

          {/* Page content */}
          <main className="p-6 flex-1 bg-background text-foreground">
            <div className="rounded-lg border border-dashed border-border p-8 text-center flex flex-col items-center justify-center h-64">
              <h2 className="text-lg font-semibold capitalize">{activeTab} Panel</h2>
              <p className="text-sm text-muted-foreground mt-1">
                This area showcases custom views. The Sidebar is collapsible and fully responsive!
              </p>
            </div>
          </main>
        </div>
      </SidebarLayout>
    );
  },
};

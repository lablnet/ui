import * as React from "react";
import { cn } from "@/utils";
import { SidebarTrigger } from "@/components/Sidebar/Sidebar";

export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const TopBar: React.FC<TopBarProps> = ({
  leftContent,
  rightContent,
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-card/85 backdrop-blur px-4 md:px-6 text-foreground",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {/* Render Sidebar trigger (only visible on mobile) */}
        <SidebarTrigger />

        {leftContent}
      </div>

      {/* Main middle area if children provided */}
      {children && <div className="hidden md:flex flex-1 max-w-md mx-4">{children}</div>}

      <div className="flex items-center gap-4">
        {rightContent}
      </div>
    </header>
  );
};

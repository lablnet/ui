import * as React from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import { useSidebar } from "@/hooks/useSidebar";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  toggleMobile: () => void;
}

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export function useSidebarContext() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("Sidebar components must be used within a SidebarLayout");
  }
  return context;
}

export interface SidebarLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, className, ...props }) => {
  const sidebarState = useSidebar();

  return (
    <SidebarContext.Provider value={sidebarState}>
      <div className={cn("flex min-h-screen w-full bg-background", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, logo, footer, className, ...props }) => {
  const { isCollapsed, isMobileOpen, setIsMobileOpen, toggleCollapse } = useSidebarContext();

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden animate-fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed bottom-0 top-0 left-0 z-40 flex h-full flex-col border-r border-border bg-card text-foreground transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "md:sticky",
          className
        )}
        {...props}
      >
        {/* Header/Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border/50">
          {!isCollapsed && logo && <div className="flex items-center gap-2 font-bold text-lg">{logo}</div>}
          {isCollapsed && logo && <div className="mx-auto flex items-center justify-center font-bold text-lg">{logo}</div>}
          {!isCollapsed && !logo && <div className="font-bold text-lg">Lablnet UI</div>}

          {/* Toggle button on desktop */}
          <button
            type="button"
            onClick={toggleCollapse}
            className="hidden md:flex absolute -right-3 top-5 z-50 h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none transition-colors shadow-sm"
          >
            {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
          </button>

          {/* Close button on mobile */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {children}
        </div>

        {/* Footer Area */}
        {footer && (
          <div className="border-t border-border/50 p-4">
            {isCollapsed ? (
              <div className="flex justify-center">{footer}</div>
            ) : (
              footer
            )}
          </div>
        )}
      </aside>
    </>
  );
};

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({ children, title, className, ...props }) => {
  const { isCollapsed } = useSidebarContext();

  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {title && !isCollapsed && (
        <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
      )}
      <ul className="space-y-1">{children}</ul>
    </div>
  );
};

export interface SidebarItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  active = false,
  href = "#",
  className,
  ...props
}) => {
  const { isCollapsed } = useSidebarContext();

  return (
    <li className={cn("list-none", className)} {...props}>
      <a
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-150 select-none",
          active
            ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/10"
            : "text-muted-foreground hover:bg-accent hover:text-foreground",
          isCollapsed && "justify-center px-0 h-10 w-10 mx-auto"
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {!isCollapsed && <span>{children}</span>}
      </a>
    </li>
  );
};

export const SidebarTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  const { toggleMobile } = useSidebarContext();

  return (
    <button
      type="button"
      onClick={toggleMobile}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none md:hidden",
        className
      )}
      {...props}
    >
      <Menu className="h-5 w-5" />
    </button>
  );
};

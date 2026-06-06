import * as React from "react";
import { X, CheckCircle2, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/utils";
import { useToast, type ToastVariant } from "@/hooks/useToast";

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toasts, dismiss } = useToast();

  const renderIcon = (variant?: ToastVariant) => {
    const iconClass = "h-5 w-5 shrink-0";
    switch (variant) {
      case "success":
        return <CheckCircle2 className={cn(iconClass, "text-emerald-500")} />;
      case "destructive":
        return <AlertCircle className={cn(iconClass, "text-destructive")} />;
      case "warning":
        return <AlertTriangle className={cn(iconClass, "text-amber-500")} />;
      case "info":
        return <Info className={cn(iconClass, "text-indigo-500")} />;
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      {/* Toast Viewport */}
      <div className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "group relative flex w-full items-start gap-3 overflow-hidden rounded-md border p-4 shadow-lg transition-all duration-300 animate-slide-in-right border-border bg-card text-foreground"
            )}
          >
            {renderIcon(t.variant)}
            <div className="grid gap-1 flex-1">
              {t.title && <div className="text-sm font-semibold">{t.title}</div>}
              {t.description && <div className="text-xs text-muted-foreground">{t.description}</div>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="absolute right-2 top-2 rounded-md p-1 opacity-0 hover:bg-accent hover:text-foreground group-hover:opacity-100 transition-all text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

import * as React from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, HelpCircle } from "lucide-react";
import { cn } from "@/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/Dialog/Dialog";
import { Button } from "@/components/Button/Button";

export type SwalIconType = "success" | "error" | "warning" | "info" | "question";

export interface SwalOptions {
  title?: string;
  text?: string;
  html?: React.ReactNode;
  icon?: SwalIconType;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonVariant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  cancelButtonVariant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
}

export interface SwalResult {
  isConfirmed: boolean;
}

interface SwalItem {
  id: string;
  options: SwalOptions;
  resolve: (result: SwalResult) => void;
}

// Global event bus for calling swal statically outside react tree
type SwalListener = (options: SwalOptions, resolve: (result: SwalResult) => void) => void;
const swalListeners = new Set<SwalListener>();

export const swal = {
  fire: (options: SwalOptions): Promise<SwalResult> => {
    return new Promise((resolve) => {
      swalListeners.forEach((listener) => listener(options, resolve));
    });
  },
};

const SwalContext = React.createContext<{
  fire: (options: SwalOptions) => Promise<SwalResult>;
} | null>(null);

export const SwalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = React.useState<SwalItem[]>([]);

  const fire = React.useCallback((options: SwalOptions): Promise<SwalResult> => {
    return new Promise((resolve) => {
      const id = Math.random().toString(36).substring(2, 9);
      setAlerts((prev) => [...prev, { id, options, resolve }]);
    });
  }, []);

  // Sync static swal.fire calls
  React.useEffect(() => {
    const staticListener: SwalListener = (options, resolve) => {
      const id = Math.random().toString(36).substring(2, 9);
      setAlerts((prev) => [...prev, { id, options, resolve }]);
    };

    swalListeners.add(staticListener);
    return () => {
      swalListeners.delete(staticListener);
    };
  }, []);

  const handleAction = React.useCallback((alert: SwalItem, isConfirmed: boolean) => {
    alert.resolve({ isConfirmed });
    setAlerts((prev) => prev.filter((a) => a.id !== alert.id));
  }, []);

  const renderIcon = (icon?: SwalIconType) => {
    const baseClass = "h-12 w-12 mx-auto mb-2";
    switch (icon) {
      case "success":
        return <CheckCircle2 className={cn(baseClass, "text-emerald-500")} />;
      case "error":
        return <AlertCircle className={cn(baseClass, "text-destructive")} />;
      case "warning":
        return <AlertTriangle className={cn(baseClass, "text-amber-500")} />;
      case "info":
        return <Info className={cn(baseClass, "text-indigo-500")} />;
      case "question":
        return <HelpCircle className={cn(baseClass, "text-sky-500")} />;
      default:
        return null;
    }
  };

  return (
    <SwalContext.Provider value={{ fire }}>
      {children}

      {alerts.map((alert) => {
        const {
          title,
          text,
          html,
          icon,
          showCancelButton = false,
          confirmButtonText = "OK",
          cancelButtonText = "Cancel",
          confirmButtonVariant = "primary",
          cancelButtonVariant = "outline",
        } = alert.options;

        return (
          <Dialog
            key={alert.id}
            open={true}
            onOpenChange={(open) => {
              if (!open) handleAction(alert, false);
            }}
          >
            <DialogContent className="max-w-sm p-6 text-center">
              <DialogHeader>
                {renderIcon(icon)}
                {title && (
                  <DialogTitle className="text-xl font-bold text-center">
                    {title}
                  </DialogTitle>
                )}
                {(text || html) && (
                  <DialogDescription className="text-center mt-2">
                    {text}
                    {html}
                  </DialogDescription>
                )}
              </DialogHeader>
              <DialogFooter className="flex justify-center gap-2 mt-4 sm:justify-center">
                {showCancelButton && (
                  <Button
                    variant={cancelButtonVariant}
                    onClick={() => handleAction(alert, false)}
                  >
                    {cancelButtonText}
                  </Button>
                )}
                <Button
                  variant={confirmButtonVariant}
                  onClick={() => handleAction(alert, true)}
                >
                  {confirmButtonText}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </SwalContext.Provider>
  );
};

export const useSwal = () => {
  const context = React.useContext(SwalContext);
  if (!context) {
    throw new Error("useSwal must be used within a SwalProvider");
  }
  return context;
};

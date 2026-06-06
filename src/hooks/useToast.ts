import { useState, useEffect, useCallback } from "react";

export type ToastVariant = "default" | "success" | "warning" | "destructive" | "info";

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number; // default 5000ms
}

export interface ToastItem extends ToastOptions {
  id: string;
}

type ToastListener = (toast: ToastItem) => void;
type DismissListener = (id: string) => void;

const toastListeners = new Set<ToastListener>();
const dismissListeners = new Set<DismissListener>();

// Static trigger helpers
export const toast = (options: ToastOptions) => {
  const id = Math.random().toString(36).substring(2, 9);
  const item: ToastItem = {
    id,
    duration: 4000,
    variant: "default",
    ...options,
  };

  toastListeners.forEach((listener) => listener(item));
  return id;
};

toast.success = (title: string, description?: string) => toast({ title, description, variant: "success" });
toast.error = (title: string, description?: string) => toast({ title, description, variant: "destructive" });
toast.warning = (title: string, description?: string) => toast({ title, description, variant: "warning" });
toast.info = (title: string, description?: string) => toast({ title, description, variant: "info" });

toast.dismiss = (id: string) => {
  dismissListeners.forEach((listener) => listener(id));
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((item: ToastItem) => {
    setToasts((prev) => [...prev, item]);

    if (item.duration !== Infinity) {
      setTimeout(() => {
        removeToast(item.id);
      }, item.duration || 4000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const handleToast = (item: ToastItem) => {
      addToast(item);
    };
    const handleDismiss = (id: string) => {
      removeToast(id);
    };

    toastListeners.add(handleToast);
    dismissListeners.add(handleDismiss);

    return () => {
      toastListeners.delete(handleToast);
      dismissListeners.delete(handleDismiss);
    };
  }, [addToast, removeToast]);

  return {
    toasts,
    toast,
    dismiss: removeToast,
  };
}

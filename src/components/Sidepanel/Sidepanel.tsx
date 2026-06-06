import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const Sidepanel = DialogPrimitive.Root;
const SidepanelTrigger = DialogPrimitive.Trigger;
const SidepanelClose = DialogPrimitive.Close;
const SidepanelPortal = DialogPrimitive.Portal;

const SidepanelOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    )}
    {...props}
    ref={ref}
  />
));
SidepanelOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sidepanelVariants = cva(
  "fixed z-50 gap-4 bg-card p-6 shadow-xl transition ease-in-out data-[state=open]:duration-300 data-[state=closed]:duration-200",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=open]:animate-slide-in-top data-[state=closed]:animate-slide-out-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=open]:animate-slide-in-bottom data-[state=closed]:animate-slide-out-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SidepanelContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sidepanelVariants> {}

const SidepanelContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SidepanelContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SidepanelPortal>
    <SidepanelOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sidepanelVariants({ side }), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </SidepanelPortal>
));
SidepanelContent.displayName = DialogPrimitive.Content.displayName;

const SidepanelHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SidepanelHeader.displayName = "SidepanelHeader";

const SidepanelFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SidepanelFooter.displayName = "SidepanelFooter";

const SidepanelTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SidepanelTitle.displayName = DialogPrimitive.Title.displayName;

const SidepanelDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SidepanelDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Sidepanel,
  SidepanelPortal,
  SidepanelOverlay,
  SidepanelTrigger,
  SidepanelClose,
  SidepanelContent,
  SidepanelHeader,
  SidepanelFooter,
  SidepanelTitle,
  SidepanelDescription,
};

import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ToastProvider } from "./Toast";
import { toast } from "@/hooks/useToast";
import { Button } from "@/components/Button/Button";

const meta: Meta = {
  title: "Components/Toast Notification",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

export const Demo: StoryObj = {
  render: () => {
    const handleSuccess = () => {
      toast.success("Saved successfully", "Your profile configuration has been stored.");
    };

    const handleError = () => {
      toast.error("Database connection failed", "Please try again later.");
    };

    const handleInfo = () => {
      toast.info("System update scheduled", "Down-time will occur tonight at midnight.");
    };

    const handleWarning = () => {
      toast.warning("Low space warning", "Your subscription is reaching its disk capacity limit.");
    };

    return (
      <div className="flex flex-wrap gap-4 justify-center py-6">
        <Button variant="secondary" onClick={handleSuccess}>
          Success Notification
        </Button>
        <Button variant="destructive" onClick={handleError}>
          Error Notification
        </Button>
        <Button variant="primary" onClick={handleInfo}>
          Info Notification
        </Button>
        <Button variant="outline" onClick={handleWarning}>
          Warning Notification
        </Button>
      </div>
    );
  },
};

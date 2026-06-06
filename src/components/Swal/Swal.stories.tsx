import type { Meta, StoryObj } from "@storybook/react";
import { SwalProvider, useSwal, swal } from "@/hooks/useSwal";
import { Button } from "@/components/Button/Button";

const meta: Meta = {
  title: "Components/SweetAlert (Swal)",
  decorators: [
    (Story) => (
      <SwalProvider>
        <Story />
      </SwalProvider>
    ),
  ],
};

export default meta;

export const Demo: StoryObj = {
  render: () => {
    // Hook-based usage
    const alertManager = useSwal();

    const handleSuccess = async () => {
      await alertManager.fire({
        title: "Operation Success",
        text: "Your configuration changes have been stored successfully.",
        icon: "success",
        confirmButtonText: "Done",
      });
    };

    const handleConfirm = async () => {
      const result = await alertManager.fire({
        title: "Delete project?",
        text: "This action cannot be undone. All configuration assets will be deleted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete",
        confirmButtonVariant: "destructive",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        await alertManager.fire({
          title: "Deleted!",
          text: "The project has been deleted.",
          icon: "success",
        });
      }
    };

    const handleStaticCall = async () => {
      // Demonstrates static swal.fire call outside react hook dependency!
      await swal.fire({
        title: "Static Call",
        text: "This alert was triggered via static swal.fire() export!",
        icon: "info",
      });
    };

    return (
      <div className="flex flex-wrap gap-4 justify-center py-6">
        <Button variant="secondary" onClick={handleSuccess}>
          Success Alert
        </Button>
        <Button variant="destructive" onClick={handleConfirm}>
          Confirm Modal
        </Button>
        <Button variant="outline" onClick={handleStaticCall}>
          Static Alert Call
        </Button>
      </div>
    );
  },
};

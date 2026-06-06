import type { Preview } from "@storybook/react";
import * as React from "react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0B0F19" },
      ],
    },
  },
};

export default preview;
export const decorators = [
  (Story: any) => {
    return (
      <div className="p-4 bg-background text-foreground">
        <Story />
      </div>
    );
  },
];

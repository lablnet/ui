import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it styled with Tailwind CSS?</AccordionTrigger>
          <AccordionContent>
            Yes! It maps CSS custom variables and fully integrates standard utility styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it fully accessible?</AccordionTrigger>
          <AccordionContent>
            Yes! Backed by Radix UI primitive templates supporting assistive screen readers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

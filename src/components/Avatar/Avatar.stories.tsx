import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

export const WithImage: StoryObj<typeof Avatar> = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: StoryObj<typeof Avatar> = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

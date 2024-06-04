import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    content: "Keynote Speaker",
    variant: "heading",
    color: "#f63",
    as: "h3",
  },
};

export const Caption: Story = {
  args: {
    content: "This is a caption",
    variant: "caption",
    color: "red",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    content: "This is a subtitle",
    textTransform: "capitalize",
  },
};

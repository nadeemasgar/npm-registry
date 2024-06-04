import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Images: Story = {
  args: {
    src: "https://beta.forbesindia.com/ms/dgems-forbes/images/speaker/1.png",
    alt: "Card image",
    width: 250,
    height: 250,
    borderRadius: 0,
  },
};
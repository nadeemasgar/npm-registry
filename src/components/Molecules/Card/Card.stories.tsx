import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "../../Atoms/Text/Text.stories";
import { Text } from "../../Atoms/Text/Text";
const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    header: {
      ...Heading.args,
    },
    image: {
      src: "https://beta.forbesindia.com/ms/dgems-forbes/images/speaker/1.png",
      alt: "Card image",
      width: 250,
      height: 250,
    },
    children: (
      <>
        <Text
          content="Shaloo Garg"
          as="span"
          fontSize="30px"
          fontWeight="bold"
          padding="10px 0px 0px"
          textAlign="center"
        />
        <Text
          content={`Managing Director, Late-Stage\nStartups and Unicorns,\nMicrosoft and Board Member of\nNASDQ`}
          as="span"
          margin="10px 0px"
          fontSize="18px"
          color="#f63"
          textAlign="center"
          customStyles={{ whiteSpace: "pre-line" }}
        />
      </>
    ),
    margin: "auto",
    padding: "10px",
    width: "300px",
  },
};

export const WithoutImage: Story = {
  args: {
    header: {
      ...Heading.args,
      margin: "10px",
    },
    children: (
      <>
        <Text
          content="Shaloo Garg"
          as="span"
          fontSize="30px"
          fontWeight="bold"
          padding="10px 0px 0px"
          textAlign="center"
        />
        <Text
          content={`Managing Director, Late-Stage\nStartups and Unicorns,\nMicrosoft and Board Member of\nNASDQ`}
          as="span"
          margin="10px 0px"
          fontSize="18px"
          color="#f63"
          textAlign="center"
          customStyles={{ whiteSpace: "pre-line" }}
        />
      </>
    ),
    margin: "auto",
    padding: "10px",
    width: "fit-content",
    customStyles: { maxWidth: "300px" },
  },
};

export const WithCustomImagePosition: Story = {
  args: {
    image: {
      src: "https://beta.forbesindia.com/ms/dgems-forbes/images/speaker/1.png",
      alt: "Card image",
      width: 250,
      height: 250,
      borderRadius: 8,
      position: "top",
    },
    children: (
      <>
        <Text
          content="Shaloo Garg"
          as="span"
          fontSize="30px"
          fontWeight="bold"
          padding="10px 0px 0px"
          textAlign="center"
        />
        <Text
          content={`Managing Director, Late-Stage\nStartups and Unicorns,\nMicrosoft and Board Member of\nNASDQ`}
          as="span"
          margin="10px 0px"
          fontSize="18px"
          color="#f63"
          textAlign="center"
          customStyles={{ whiteSpace: "pre-line" }}
        />
      </>
    ),
    margin: "auto",
    padding: "20px",
    width: "fit-content",
  },
};

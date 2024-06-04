import type { Meta, StoryObj } from "@storybook/react";
import { Jury } from "./Jury";
const meta = {
  title: "Organisms/Jury",
  component: Jury,
  tags: ["autodocs"],
} satisfies Meta<typeof Jury>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicJury: Story = {
  args: {
    data: [
      {
        name: "MALA BALI",
        designation: "Founder\nMBB Consulting",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Mala.png",
          alt: "MALA BALI",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "MALA CHAWLA",
        designation:
          "Managing Director, Global Practice\nGroup Leader DEI, APAC Practice\nLeader ESG\nStanton Chase",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/MALA-CHAWLA.png",
          alt: "MALA CHAWLA",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "YOGI SRIRAM",
        designation:
          "Ex Senior VP - Corporate HR\nL&T & Member of Ex Comm, L&T &\nStrategic HR Consultant",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Yogi-Sri-Ram.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "KALPANA BANSAL",
        designation: "Solution Head - Talent and AI\nDrawinbox",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Kalpana-Bansal.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "ANSHUMALI SAXENA",
        designation: "Business Transformation Strategist",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Anshumali-Saxena.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "SUCHITRA RAJENDRA",
        designation: "Founder\nQEDHR",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Suchitra-Rajendra.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "ANKUR SETHI",
        designation: "Founder & CEO\nCorporate Shiksha",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Ankur-Sethi.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "S.Y. SIDDIQUI",
        designation: "Former Executive Advisor\nMaruti Suzuki India Ltd",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Siddiqui.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
      {
        name: "DR. G. RAJKUMAR",
        designation: "Founder and CEO\nHR Footprints",
        image: {
          src: "https://cms-article.forbesindia.com/media/image_uploads/Dr.-G.-Rajkumar.png",
          alt: "YOGI SRIRAM",
          width: 183,
          height: 192,
          borderRadius: 50,
          position: "top",
        },
      },
    ],
    styles: {
      list: {
        backgroundColor: "#0c3583",
        color: "#FFFFFF",
        padding: "50px 0px",
      },
      card: {
        boxShadow: "none",
        paddingBottom: "15px",
        width: "33.3%",
      },
      header: {
        as: "h4",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "center",
        customStyles: { paddingTop: "15px" },
      },
      body: {
        textAlign: "center",
        customStyles: { whiteSpace: "pre-line" },
        fontSize: "18px",
      },
    },
  },
};

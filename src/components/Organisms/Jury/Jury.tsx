import { ImageProps } from "../../Atoms/Images/Image";
import { Text, TextProps } from "../../Atoms/Text/Text";
import { Card, CardProps } from "../../Molecules/Card/Card";

import "./Jury.css";

interface JuryMember {
  name: string;
  designation: string;
  image: ImageProps & { position?: "top" | "bottom" | "left" | "right" };
}
interface JuryProps {
  data: JuryMember[];
  styles?: {
    list?: React.CSSProperties;
    card?: CardProps["customStyles"];
    header?: Omit<TextProps, "content">;
    body?: Omit<TextProps, "content">;
  };
}
export const Jury = ({ data, styles }: JuryProps) => {
  return (
    <div className="jury-section" style={styles?.list}>
      {data.map((member, index) => (
        <Card
          key={index}
          image={{ ...member.image }}
          header={<Text content={member.name} {...styles?.header} />}
          customStyles={styles?.card}
        >
          <Text content={member.designation} {...styles?.body} />
        </Card>
      ))}
    </div>
  );
};

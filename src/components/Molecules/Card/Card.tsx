import React, { ReactNode } from "react";
import Image, { ImageProps } from "../../Atoms/Images/Image";
import { Text, TextProps } from "../../Atoms/Text/Text";

import "./Card.css";

export interface CardProps {
  image?: ImageProps & { position?: "top" | "bottom" | "left" | "right" };
  header?: TextProps | ReactNode;
  children?: ReactNode;
  footer?: TextProps | ReactNode;
  width?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  customStyles?: React.CSSProperties;
}

export const Card = ({
  image,
  header,
  children,
  footer,
  width,
  borderRadius,
  margin,
  padding,
  customStyles,
}: CardProps) => {
  const position = image?.position || "";

  const styles: React.CSSProperties = {
    ...(width && { width }),
    ...(borderRadius && { borderRadius }),
    ...(margin && { margin }),
    ...(padding && { padding }),
    ...customStyles,
  };

  const renderText = (props: TextProps | ReactNode) => {
    if (React.isValidElement(props) || typeof props === "string") {
      return props;
    }
    return props ? <Text {...(props as TextProps)} /> : null;
  };

  const renderImage = () => image && <Image {...image} />;

  const isVertical = () => position === "top" || position === "bottom";

  const renderVerticalLayout = () => (
    <>
      {position === "top" && renderImage()}
      {renderText(header)}
      {!position && renderImage()}
      <div className="card-body">{renderText(children)}</div>
      {renderText(footer)}
      {position === "bottom" && renderImage()}
    </>
  );

  const renderHorizontalLayout = () => (
    <>
      {renderImage()}
      <div>
        {renderText(header)}
        <div className="card-body">{renderText(children)}</div>
        {renderText(footer)}
      </div>
    </>
  );
  return (
    <div className={`card ${position}`} style={styles}>
      {isVertical() || !position
        ? renderVerticalLayout()
        : renderHorizontalLayout()}
    </div>
  );
};

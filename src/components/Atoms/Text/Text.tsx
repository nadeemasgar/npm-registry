import "./Text.css";

export interface TextProps {
  content: string;
  as?:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b"
    | "i"
    | "u"
    | "abbr"
    | "cite"
    | "del"
    | "em"
    | "ins"
    | "kbd"
    | "mark"
    | "s"
    | "samp"
    | "sub"
    | "sup";
  variant?: "subtitle" | "heading" | "caption";
  customStyles?: React.CSSProperties;
  ariaLabel?: string;
  role?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: "normal" | "bold" | "bolder" | "lighter";
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  noWrap?: boolean;
  ellipsis?: boolean;
}

export const Text = ({
  content,
  as = "p",
  variant,
  ariaLabel = "",
  role = "",
  customStyles,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  textTransform,
  margin,
  padding,
  backgroundColor,
  noWrap,
  ellipsis,
  ...props
}: TextProps) => {
  const Tag = as as keyof JSX.IntrinsicElements;
  const styles: React.CSSProperties = {
    ...(color && { color }),
    ...(fontSize && { fontSize }),
    ...(fontWeight && { fontWeight }),
    ...(lineHeight && { lineHeight }),
    ...(letterSpacing && { letterSpacing }),
    ...(textAlign && { textAlign }),
    ...(textTransform && { textTransform }),
    ...(margin && { margin }),
    ...(padding && { padding }),
    ...(backgroundColor && { backgroundColor }),
    whiteSpace: noWrap ? "nowrap" : ellipsis ? "nowrap" : "normal",
    overflow: ellipsis ? "hidden" : "visible",
    textOverflow: ellipsis ? "ellipsis" : "clip",
    wordBreak: ellipsis ? "break-word" : "normal",
    wordWrap: ellipsis ? "break-word" : "normal",
    display: ellipsis ? "inline-block" : "block",
    maxWidth: ellipsis ? "100%" : "normal",
    ...customStyles,
  };

  return (
    <Tag
      className={`text ${variant || ""}`}
      aria-label={ariaLabel}
      role={role}
      style={styles}
      {...props}
    >
      {content}
    </Tag>
  );
};

export default Text;

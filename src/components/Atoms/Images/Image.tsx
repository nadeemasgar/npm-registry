import React from "react";

export interface ImageProps {
    alt: string;
    width: number;
    height: number;
    src: string;
    borderRadius?: number;
  }
  

const Image = ({
    src,
    alt,
    width,
    height,
    borderRadius
}: ImageProps) => {
    const  styles: React.CSSProperties = {
        ...(borderRadius && { borderRadius }),
    }
    return <img src={src} alt={alt} width={width} height={height} style={styles} />
}

export default Image
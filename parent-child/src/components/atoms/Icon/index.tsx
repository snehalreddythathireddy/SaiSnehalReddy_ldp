interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Icon = ({
  src,
  alt,
  width = 16,
  height = 16,
}: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Icon;
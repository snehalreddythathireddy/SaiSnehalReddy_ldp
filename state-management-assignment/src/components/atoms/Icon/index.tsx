import Box from "@mui/material/Box";

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Icon = ({
  src,
  alt,
  width = 20,
  height = 20,
}: IconProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width,
        height,
        display: "block",
      }}
    />
  );
};

export default Icon;
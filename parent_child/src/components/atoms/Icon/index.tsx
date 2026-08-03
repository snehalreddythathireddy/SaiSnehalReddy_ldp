import type { ComponentType, SVGProps } from "react";

interface IconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
}

const Icon = ({
  icon: IconComponent,
  width = 16,
  height = 16,
}: IconProps) => {
  return <IconComponent width={width} height={height} />;
};

export default Icon;
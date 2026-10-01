import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Home: Story = { args: { src: "/assets/icons/home-2.svg", size: 18, alt: "Home" } };
export const Coin: Story = { args: { src: "/assets/icons/coin.svg", size: 18, alt: "Cash Acceleration" } };
export const Info: Story = { args: { src: "/assets/icons/info-circle.svg", size: 14, alt: "Info" } };
export const Logout: Story = { args: { src: "/assets/icons/logout.svg", size: 16, alt: "Log Out" } };

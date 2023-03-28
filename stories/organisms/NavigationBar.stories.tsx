import React from 'react';
import { Meta } from "@storybook/react";
import NavigationBar from "@/components/organisms/NavigationBar";

export default {
  component: NavigationBar
} as Meta<typeof NavigationBar>

export const Default = () => {
  return <NavigationBar />
}
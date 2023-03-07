import React from 'react';
import { Meta } from "@storybook/react";
import Layout from "@/components/templates/Layout/Layout";

export default {
  component: Layout
} as Meta<typeof Layout>

export const Default = () => {
  return (
    <Layout>
      <p>Layout Preview</p>
    </Layout>
  )
}
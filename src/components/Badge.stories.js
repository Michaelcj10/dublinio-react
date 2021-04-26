// src/components/Button.stories.js
import React from "react";
import Badge from "./Badge";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    text: { control: "text" },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
};

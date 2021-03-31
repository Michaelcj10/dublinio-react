// src/components/Button.stories.js
import React from "react";

import Input from "./input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    text: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => (
  <div style={{ width: "200px" }}>
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
};

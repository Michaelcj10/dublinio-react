// src/components/Button.stories.js
import React from "react";

import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};

// src/components/Button.stories.js
import React from "react";

import RadioButton from "./radio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Toggle",
  component: RadioButton,
  argTypes: {
    text: { control: "text" },
    toggledOn: { control: "boolean" },
    disabled: { control: "boolean" }
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  toggledOn: false,
  text: "Button",
};

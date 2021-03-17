import React from "react";

import { PrimaryButton } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Buttons",
  component: PrimaryButton,
  argTypes: {
    text: { control: "text" },
    type: { control: "text" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

const Template = (args) => {
  return <PrimaryButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: "My Button",
  type: "button",
  fullWidth: false,
  disabled: false,
  loading: false,
};

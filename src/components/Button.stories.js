// src/components/Button.stories.js
import React from "react";

import Button from "./Button";
import SecondButton from "./SecondButton";
import LinkButton from "./linkButton";

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
const SecondButtonTemplate = (args) => <SecondButton {...args} />;
const LinkButtonTemplate = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});
export const Second = SecondButtonTemplate.bind({});
export const Link = LinkButtonTemplate.bind({});
Primary.args = {
  text: "Button",
};
Second.args = {
  text: "Button",
};
Link.args = {
  text: "Button",
};

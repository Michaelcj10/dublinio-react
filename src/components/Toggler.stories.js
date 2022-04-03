// src/components/Button.stories.js
import React from "react";
import Toggler from "./Toggler";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Toggler",
  component: Toggler,
  argTypes: {
    text: { control: "text" },
  },
};

const Template = (args) => (
  <Toggler
    onDateChanged={() => {
      console.log("dsf ");
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
};

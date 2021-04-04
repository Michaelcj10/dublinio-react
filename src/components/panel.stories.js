// src/components/Button.stories.js
import React from "react";

import Panel from "./panel";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Panel",
  component: Panel,
  argTypes: {
    background: { control: "text" },
  },
};

const Template = (args) => <Panel {...args} content={<div>1234</div>} />;

export const Primary = Template.bind({});

Primary.args = {};

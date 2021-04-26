// src/components/Button.stories.js
import React from "react";

import ImageLoader from "./imageLoader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Image",
  component: ImageLoader,
  argTypes: {
    alt: { control: "text" },
    src: { control: "text" },
    lazy: { control: "boolean" },
  },
};

const Template = (args) => <ImageLoader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  alt: "image",
  src: "https://dublinio.com/img/team/people/people-1.jpg",
  width: "286px",
  height: "286px",
};

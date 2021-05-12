"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _imageLoader = _interopRequireDefault(require("./imageLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Image",
  component: _imageLoader.default,
  argTypes: {
    alt: {
      control: "text"
    },
    src: {
      control: "text"
    },
    lazy: {
      control: "boolean"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_imageLoader.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  alt: "image",
  src: "https://dublinio.com/img/team/people/people-1.jpg",
  width: "286px",
  height: "286px"
};
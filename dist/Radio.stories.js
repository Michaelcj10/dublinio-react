"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _radio = _interopRequireDefault(require("./radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Toggle",
  component: _radio.default,
  argTypes: {
    text: {
      control: "text"
    },
    toggledOn: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_radio.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  toggledOn: false,
  text: "Button"
};
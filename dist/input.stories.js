"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Input",
  component: _input.default,
  argTypes: {
    text: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    error: {
      control: "text"
    },
    label: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "200px"
    }
  }, /*#__PURE__*/_react.default.createElement(_input.default, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  text: "Button"
};
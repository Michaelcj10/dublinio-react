"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Button",
  component: _Button.default,
  argTypes: {
    text: {
      control: "text"
    },
    loading: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    fullWidth: {
      control: "boolean"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  text: "Button"
};
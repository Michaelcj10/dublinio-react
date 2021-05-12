"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("./Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Badge",
  component: _Badge.default,
  argTypes: {
    text: {
      control: "text"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Badge.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  text: "Button"
};
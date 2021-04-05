"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Second = exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _SecondButton = _interopRequireDefault(require("./SecondButton"));

var _linkButton = _interopRequireDefault(require("./linkButton"));

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

var SecondButtonTemplate = function SecondButtonTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_SecondButton.default, args);
};

var LinkButtonTemplate = function LinkButtonTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_linkButton.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
var Second = SecondButtonTemplate.bind({});
exports.Second = Second;
var Link = LinkButtonTemplate.bind({});
exports.Link = Link;
Primary.args = {
  text: "Button"
};
Second.args = {
  text: "Button"
};
Link.args = {
  text: "Button"
};
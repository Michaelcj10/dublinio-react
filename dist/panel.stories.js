"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _panel = _interopRequireDefault(require("./panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// eslint-disable-next-line import/no-anonymous-default-export
var _default = {
  title: "Example/Panel",
  component: _panel.default,
  argTypes: {
    background: {
      control: "text"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_panel.default, _extends({}, args, {
    content: /*#__PURE__*/_react.default.createElement("div", null, "1234")
  }));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {};
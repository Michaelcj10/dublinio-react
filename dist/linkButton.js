"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyle = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #998dff;\n  font-size: 16px;\n  font-weight: 900;\n  transition: all 0.5s;\n  font-weight: bold;\n  opacity: 1;\n  cursor: pointer;\n  font-family: sans-serif;\n  position: relative;\n\n  &::after {\n    border-top: 2px solid #998dff;\n    content: \"\";\n    position: absolute;\n    right: 0;\n    bottom: 0em;\n    left: 0;\n    width: 60%;\n    transition: all 0.5s;\n  }\n\n  &:hover {\n    text-decoration: underline;\n\n    &::after {\n      width: 100%;\n    }\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n"])));

function LinkButton(_ref) {
  var type = _ref.type,
      text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(ButtonStyle, {
    type: type,
    onClick: onClick
  }, text);
}

LinkButton.propTypes = {
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
LinkButton.defaultProps = {
  onClick: undefined
};
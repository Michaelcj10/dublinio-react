"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Panel;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 5%),\n    0px 2px 1px -1px rgb(0 0 0 / 1%);\n  min-height: 100px;\n  padding: 15px;\n  border-radius: 4px;\n  max-width: 100%;\n  cursor: ", ";\n  transition: all 0.5s;\n  background: ", ";\n\n  &:hover {\n    box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%),\n      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);\n  }\n\n  > * {\n    font-family: sans-serif;\n  }\n"])), function (props) {
  return props.clickable ? "pointer" : "initial";
}, function (props) {
  return props.background;
});

function Panel(_ref) {
  var content = _ref.content,
      onClick = _ref.onClick,
      background = _ref.background;
  return /*#__PURE__*/_react.default.createElement(Wrap, {
    background: background,
    onClick: onClick,
    clickable: typeof onclick !== "undefined"
  }, content && /*#__PURE__*/_react.default.createElement("div", null, content));
}

Panel.propTypes = {
  content: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Panel.defaultProps = {
  onClick: undefined,
  background: "#fff"
};
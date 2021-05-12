"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BadgeStyle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: fit-content;\n  height: 25px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #998dff;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 14px;\n  font-family: sans-serif;\n  font-weight: 700;\n  cursor: ", ";\n  transition: all 0.5s;\n\n  &:hover {\n    opacity: 0.95; \n    padding: 0 12px;\n  }\n"])), function (props) {
  return props.onClick ? "pointer" : "initial";
});

function Badge(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(BadgeStyle, {
    onClick: onClick
  }, text);
}

Badge.propTypes = {
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
Badge.defaultProps = {
  onClick: undefined
};
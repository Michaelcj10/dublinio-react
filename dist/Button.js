"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyle = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to right,\n    #70bafe 0,\n    #998dff 51%,\n    #70bafe 100%\n  );\n  color: #fff;\n  border: none;\n  height: 35px;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 4px;\n  min-width: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  border: 2px solid rgba(204, 241, 255, 0.5);\n  transition: all 0.5s;\n  &:hover {\n    box-shadow: 0px 1px 1px -2px rgb(0 0 0 / 12%),\n      0px 2px 2px 0px rgb(0 0 0 / 10%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n    opacity: ", ";\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n\n  &:active {\n    opacity: 0.6;\n  }\n"])), function (props) {
  return props.fullWidthBtn ? "100%" : "100px";
}, function (props) {
  return props.disabledBtn || props.loadingBtn ? "not-allowed" : "pointer";
}, function (props) {
  return props.disabledBtn ? ".6" : "1";
}, function (props) {
  return props.disabledBtn ? ".6" : ".9";
});

function Button(_ref) {
  var type = _ref.type,
      text = _ref.text,
      onClick = _ref.onClick,
      fullWidth = _ref.fullWidth,
      disabled = _ref.disabled,
      loading = _ref.loading;
  return /*#__PURE__*/_react.default.createElement(ButtonStyle, {
    type: type,
    onClick: onClick,
    fullWidthBtn: fullWidth,
    disabledBtn: disabled || loading,
    loadingBtn: loading
  }, text);
}

Button.propTypes = {
  fullWidth: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  onClick: undefined
};
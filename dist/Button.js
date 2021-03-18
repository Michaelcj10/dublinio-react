"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dots = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 20% {\n      color: rgba(0,0,0,0);\n      text-shadow:\n        .25em 0 0 rgba(0,0,0,0),\n        .5em 0 0 rgba(0,0,0,0);}\n    40% {\n      color: white;\n      text-shadow:\n        .25em 0 0 rgba(0,0,0,0),\n        .5em 0 0 rgba(0,0,0,0);}\n    60% {\n      text-shadow:\n        .25em 0 0 white,\n        .5em 0 0 rgba(0,0,0,0);}\n    80%, 100% {\n      text-shadow:\n        .25em 0 0 white,\n        .5em 0 0 white;}}\n"])));

var ButtonStyle = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to right,\n    #70bafe 0,\n    #998dff 51%,\n    #70bafe 100%\n  );\n  color: #fff;\n  border: none;\n  height: 35px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 4px;\n  min-width: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  border: 2px solid rgba(204, 241, 255, 0.5);\n  transition: all 0.5s;\n  animation: ", ";\n  &:hover {\n    box-shadow: 0px 1px 1px -2px rgb(0 0 0 / 12%),\n      0px 2px 2px 0px rgb(0 0 0 / 10%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n    opacity: ", ";\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n"])), function (props) {
  return props.fullWidthBtn ? "100%" : "100px";
}, function (props) {
  return props.disabledBtn || props.loadingBtn ? "not-allowed" : "pointer";
}, function (props) {
  return props.disabledBtn ? ".6" : "1";
}, function (props) {
  return props.loadingBtn ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          ", " 1s steps(5, end) infinite\n        "])), Dots) : "none";
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
    disabledBtn: disabled,
    loadingBtn: loading
  }, loading ? "..." : text);
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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 40px;\n  padding: 0 10px;\n  outline: none;\n  border-bottom: 2px solid #998dff;\n  background: ", ";\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  transition: all 0.5s;\n  width: 100%;\n  color: #716f6f;\n  border-color: ", ";\n  margin-top: ", ";\n  width: 90%;\n\n  &:focus {\n    border-color: ", ";\n    width: 100%;\n  }\n\n  ::placeholder {\n    color: #b3b3b3;\n  }\n\n  cursor: ", ";\n  opacity: ", ";\n"])), function (props) {
  return props.focused ? "white" : "whitesmoke";
}, function (props) {
  return props.haserror ? "red" : "#998dff";
}, function (props) {
  return props.haslabel ? "5px" : "0px";
}, function (props) {
  return props.haserror ? "red" : "#007bff";
}, function (props) {
  return props.disabled ? "not-allowed" : "initial";
}, function (props) {
  return props.disabled ? "0.4" : "1";
});

var Error = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #e23030;\n  font-family: sans-serif;\n  font-size: 12px;\n  opacity: ", ";\n"])), function (props) {
  return props.disabled ? "0.4" : "1";
});

var Label = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: sans-serif;\n  font-size: 12px;\n  transition: all 0.5s;\n  margin-bottom: 5px;\n  margin-left: 1px;\n  opacity: ", ";\n"])), function (props) {
  return props.haserror ? "red" : props.focused ? "#007bff" : "#998dff";
}, function (props) {
  return props.disabled ? "0.4" : "1";
});

function Input(_ref) {
  var text = _ref.text,
      placeholder = _ref.placeholder,
      error = _ref.error,
      onChange = _ref.onChange,
      label = _ref.label,
      disabled = _ref.disabled;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement(Label, {
    disabled: disabled,
    focused: focused,
    haserror: error !== ""
  }, label), /*#__PURE__*/_react.default.createElement(InputStyle, {
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    },
    haserror: error !== "",
    placeholder: placeholder,
    defaultValue: text,
    onChange: onChange,
    focused: focused,
    disabled: disabled,
    haslabel: label && label !== ""
  }), error && /*#__PURE__*/_react.default.createElement(Error, {
    disabled: disabled
  }, error));
}

Input.propTypes = {
  text: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  error: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
Input.defaultProps = {
  text: "something",
  error: "",
  disabled: false
};
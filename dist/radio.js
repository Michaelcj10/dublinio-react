"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 22px;\n  height: 22px;\n  margin-right: 8px;\n  border-radius: 50%;\n  transition: all 0.5s;\n  background: ", ";\n  border: 2px solid ", ";\n  opacity: ", ";\n"])), function (props) {
  return props.toggledOn ? "transparent" : "#ececec";
}, function (props) {
  return props.toggledOn ? "#70bafe" : "#d8d8d8";
}, function (props) {
  return props.disabled ? ".6" : "1";
});

var Wrap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n\n  > * {\n    cursor: ", ";\n    font-family: sans-serif;\n    text-transform: lowercase;\n  }\n"])), function (props) {
  return props.disabled ? "not-allowed" : "pointer";
});

var Toggle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  position: absolute;\n  left: 6px;\n  transition: all 0.5s;\n  background: ", ";\n  opacity: ", ";\n"])), function (props) {
  return props.toggledOn ? "#70bafe" : "#d8d8d8";
}, function (props) {
  return props.disabled ? ".6" : "1";
});

function RadioButton(_ref) {
  var text = _ref.text,
      _onClick = _ref.onClick,
      toggledOn = _ref.toggledOn,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(Wrap, {
    disabled: disabled,
    onClick: function onClick() {
      if (!disabled) {
        _onClick();
      }
    }
  }, /*#__PURE__*/_react.default.createElement(ButtonStyle, {
    toggledOn: toggledOn,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(Toggle, {
    toggledOn: toggledOn,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("span", null, text));
}

RadioButton.propTypes = {
  text: _propTypes.default.string.isRequired,
  toggledOn: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func
};
RadioButton.defaultProps = {
  onClick: undefined,
  disabled: false
};
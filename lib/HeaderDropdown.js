"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));

var _NavItem = _interopRequireDefault(require("react-bootstrap/NavItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AppHeaderDropdown = function AppHeaderDropdown(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
    as: _NavItem["default"],
    show: show,
    onToggle: function onToggle() {
      return setShow(!show);
    }
  }, children);
};

AppHeaderDropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].node
} : {};
var _default = AppHeaderDropdown;
exports["default"] = _default;
module.exports = exports.default;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sidebarToggle, sidebarPSToggle } from './Shared/my-helpers.js';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
} : {};
var defaultProps = {
  tag: 'button',
  type: 'button'
};

var AppSidebarMinimizer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarMinimizer, _Component);

  function AppSidebarMinimizer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebarMinimizer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    sidebarPSToggle(!isMinimized);
  };

  _proto.handleClick = function handleClick() {
    console.log('SidebarMinimizer handleClick!');
    sidebarToggle();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        type = _this$props.type,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag", "type"]);

    var classes = classNames(className, 'sidebar-minimizer', 'mt-auto');
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes,
      type: type
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.handleClick(event);
      }
    }), children);
  };

  return AppSidebarMinimizer;
}(Component);

AppSidebarMinimizer.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarMinimizer.defaultProps = defaultProps;
export default AppSidebarMinimizer;
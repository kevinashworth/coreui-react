function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ClickOutHandler from 'react-onclickout';
import './Shared/element-closest';
import SidebarController from './Shared/my-sidebar-controller.js';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  minimized: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : {};
var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

var AppSidebar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebar, _Component);

  function AppSidebar(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleSidebarMinimizer", function (shouldMinimize) {
      if (shouldMinimize) {
        _this.sidebarController.narrow();
      } else {
        _this.sidebarController.wide();
      }
    });

    _this.sidebarController = SidebarController;
    _this.isCompact = _this.isCompact.bind(_assertThisInitialized(_this));
    _this.isFixed = _this.isFixed.bind(_assertThisInitialized(_this));
    _this.isOffCanvas = _this.isOffCanvas.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.handleSidebarMinimizer(this.props.minimized);
  };

  _proto.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };

  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };

  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };

  _proto.displayBreakpoint = function displayBreakpoint(display) {
    this.sidebarController.setDisplayBreakpoint(display);
  };

  _proto.hideMobile = function hideMobile() {
    this.sidebarController.hideMobile();
  };

  _proto.onClickOut = function onClickOut(e) {
    if (typeof window !== 'undefined' && (document.body.classList.contains('sidebar-show') || document.body.classList.contains('sidebar-lg-show'))) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;
    var classes = classNames(className, 'sidebar'); // sidebar-nav root

    return /*#__PURE__*/React.createElement(ClickOutHandler, {
      onClickOut: function onClickOut(e) {
        _this2.onClickOut(e);
      }
    }, /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes
    }, attributes), children));
  };

  return AppSidebar;
}(Component);

AppSidebar.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebar.defaultProps = defaultProps;
export default AppSidebar;
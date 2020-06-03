"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _classes = require("./classes.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SidebarController = function SidebarController() {
  var _this = this;

  _defineProperty(this, "add", function (className) {
    if (document.body) {
      document.body.classList.add(className);
    }
  });

  _defineProperty(this, "remove", function (className) {
    if (document.body) {
      document.body.classList.remove(className);
    }
  });

  _defineProperty(this, "contains", function (className) {
    if (document.body) {
      return document.body.classList.contains(className);
    }
  });

  _defineProperty(this, "close", function () {
    // console.log('Hello from close!');
    if (document.body) {
      _this.remove('sidebar-show');

      _this.remove("sidebar-" + _this.display + "-show");

      _this.isOpen = false;
    }
  });

  _defineProperty(this, "open", function () {
    if (document.body) {
      _this.add('sidebar-show');

      _this.add("sidebar-" + _this.display + "-show");

      _this.isOpen = true;
    }
  });

  _defineProperty(this, "toggleOpen", function () {
    // console.log('Hello from toggleOpen!');
    if (document.body) {
      if (_this.isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    }
  });

  _defineProperty(this, "narrow", function () {
    if (document.body) {
      _this.add('sidebar-minimized');

      _this.add('brand-minimized');

      _this.isMinimized = true;

      _this.sidebarPSToggle();
    }
  });

  _defineProperty(this, "wide", function () {
    if (document.body) {
      _this.remove('sidebar-minimized');

      _this.remove('brand-minimized');

      _this.isMinimized = false;

      _this.sidebarPSToggle();
    }
  });

  _defineProperty(this, "toggleMinimized", function () {
    if (document.body) {
      if (_this.isMinimized) {
        _this.wide();
      } else {
        _this.narrow();
      }
    }
  });

  _defineProperty(this, "setDisplayBreakpoint", function (display) {
    var cssTemplate = "sidebar-" + display + "-show";
    var _sidebarCssClasses$ = _classes.sidebarCssClasses[0],
        cssClass = _sidebarCssClasses$[0];

    if (display && _classes.sidebarCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }

    _this.add(cssClass);

    _this.display = display; // now, to ensure that both classes are used in tandem and that sidebarPSToggle is called

    if (_this.isOpen) {
      _this.open();
    } else {
      _this.close();
    }
  });

  _defineProperty(this, "hideMobile", function () {
    console.log('Hello from hideMobile in my-sidebar-contoller.js!');

    _this.remove('sidebar-show'); // this.remove(`sidebar-${this.display}-show`);

  });

  _defineProperty(this, "isOnMobile", function () {
    var onMobile = false;

    try {
      var minimizerElement = document.querySelector('.sidebar-minimizer');

      if (minimizerElement) {
        onMobile = getComputedStyle(minimizerElement).getPropertyValue('display') === 'none';
      } else {
        var sidebarElement = document.querySelector('.sidebar .sidebar-nav');
        sidebarElement && (onMobile = getComputedStyle(sidebarElement).getPropertyValue('overflow-y') === 'auto');
      }
    } catch (ignore) {
      // eslint-disable-next-line
      console.warn('CoreUI isOnMobile failed to getComputedStyle', ignore);
    }

    return onMobile;
  });

  _defineProperty(this, "sidebarPSToggle", function (toggle) {
    if (document.body) {
      if (_this.isOnMobile()) {
        toggle = true;
      } else {
        toggle = !_this.isMinimized;
      }

      var ps = {
        y: {
          rail: {},
          thumb: {}
        }
      };
      var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';
      var sidebar = document.querySelector('.sidebar-nav');
      ps.y.rail.on = document.querySelector('.sidebar-nav .ps__rail-y');
      ps.y.rail.off = document.querySelector('.sidebar-nav .ps__rail-y-off');
      ps.y.thumb.on = document.querySelector('.sidebar-nav .ps__thumb-y');
      ps.y.thumb.off = document.querySelector('.sidebar-nav .ps__thumb-y-off');

      if (sidebar) {
        if (toggle) {
          sidebar.classList.add('ps');
          sidebar.classList.add('ps-container');
          sidebar.classList.add('ps--active-y');

          if (ps.y.rail.off) {
            ps.y.rail.off.classList.add('ps__rail-y');
            ps.y.rail.off.removeAttribute('style');
            ps.y.rail.off.style.left = isRtl ? '0px' : 'unset';
            ps.y.rail.off.style.right = isRtl ? 'unset' : '0px';
            ps.y.rail.off.classList.remove('ps__rail-y-off');
          }

          if (ps.y.thumb.off) {
            ps.y.thumb.off.removeAttribute('style');
            ps.y.thumb.off.classList.add('ps__thumb-y');
            ps.y.thumb.off.classList.remove('ps__thumb-y-off');
          }
        } else {
          if (ps.y.rail.on) {
            ps.y.rail.on.classList.add('ps__rail-y-off');
            ps.y.rail.on.removeAttribute('style');
            ps.y.rail.on.classList.remove('ps__rail-y');
          }

          if (ps.y.thumb.on) {
            ps.y.thumb.on.classList.add('ps__thumb-y-off');
            ps.y.thumb.on.removeAttribute('style');
            ps.y.thumb.on.classList.remove('ps__thumb-y');
          }

          sidebar.classList.remove('ps');
          sidebar.classList.remove('ps-container');
          sidebar.classList.remove('ps--active-y');
        }
      }
    }
  });

  console.log('Hello from SidebarController!'); // if (document) {
  //   this.isMinimized = this.contains('sidebar-minimized') || this.contains('brand-minimized');
  //   // now, to ensure that both classes are used in tandem and that sidebarPSToggle is called
  //   if (this.isMinimized) {
  //     this.narrow();
  //   } else {
  //     this.wide();
  //   }
  //   this.display = null;
  //   this.setDisplayBreakpoint('lg');
  //   this.isOpen = true;
  //   // now, to ensure that both plain and breakpoint classes are used together
  //   if (this.isOpen) {
  //     this.open();
  //   } else {
  //     this.close();
  //   }
  // } else {

  this.display = 'lg';
  this.isMinimized = false;
  this.isOpen = true; // }
} // isItOpen = () => {
//   let itIsOpen = false;
//   sidebarCssClasses.forEach((cssClass) => {
//     if (document.body.classList.contains(cssClass)) {
//       itIsOpen = true;
//     }
//   });
//   return itIsOpen;
// }
; // export it as a singleton


var _default = new SidebarController();

exports["default"] = _default;
module.exports = exports.default;
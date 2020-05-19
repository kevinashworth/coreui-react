'use strict';

exports.__esModule = true;
exports.sidebarToggle = sidebarToggle;
exports.sidebarPSToggle = sidebarPSToggle;
var addBodyClass = function addBodyClass(className) {
  return document.body.classList.add(className);
};
var removeBodyClass = function removeBodyClass(className) {
  return document.body.classList.remove(className);
};
var toggle = function toggle(className) {
  return document.body.classList.toggle(className);
};

function sidebarMinimize(force) {
  toggleClass('sidebar-minimized', force);
}

function brandMinimize(force) {
  toggleClass('brand-minimized', force);
}

function toggleClass(className, force) {
  if (document.body) {
    if (force === true) {
      addBodyClass(className);
    } else if (force === false) {
      removeBodyClass(className);
    } else {
      toggle(className);
    }
  }
}

function isOnMobile() {
  var onMobile = false;
  return onMobile;
}

function sidebarToggle(toggle) {
  if (document.body) {
    var minimize = typeof toggle !== 'undefined' ? toggle : !document.body.classList.contains('sidebar-minimized');
    sidebarMinimize(minimize);
    brandMinimize(minimize);
    sidebarPSToggle(!minimize);
  }
}

function sidebarPSToggle() {
  var toggle;
  if (document.body) {
    if (isOnMobile()) {
      toggle = true;
    } else {
      var isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false;
      toggle = !isSidebarMinimized;
    }

    var ps = { y: { rail: {}, thumb: {} } };
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
}
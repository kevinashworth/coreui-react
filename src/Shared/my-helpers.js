const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);
const toggle = className => document.body.classList.toggle(className);

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
  let onMobile = false;
  return onMobile;
}

export function sidebarToggle (toggle) {
  // eslint-disable-next-line no-console
  console.log('my-helpers sidebarToggle toggle:', toggle)
  if (document.body) {
    const minimize = arguments.length
      ? toggle
      : !document.body.classList.contains('sidebar-minimized');
    // eslint-disable-next-line no-console
    console.log('my-helpers sidebarToggle minimize:', minimize)
    sidebarMinimize(minimize);
    brandMinimize(minimize);
    sidebarPSToggle(!minimize);
  }
}

export function sidebarPSToggle(toggle) {
  // eslint-disable-next-line no-console
  console.log('my-helpers sidebarPSToggle toggle 1:', toggle)
  if (document.body) {
    if (isOnMobile()) {
      toggle = true;
    } else {
      const isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false;
      toggle = !isSidebarMinimized;
    }
    // eslint-disable-next-line no-console
    console.log('my-helpers sidebarPSToggle toggle 2:', toggle)

    const ps = { y: { rail: {}, thumb: {} } };
    const isRtl = getComputedStyle(document.documentElement).direction === 'rtl'
    const sidebar = document.querySelector('.sidebar-nav');
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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';

var AppHeaderDropdown = function AppHeaderDropdown(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
      show = _useState[0],
      setShow = _useState[1];

  return /*#__PURE__*/React.createElement(Dropdown, {
    as: NavItem,
    show: show,
    onToggle: function onToggle() {
      return setShow(!show);
    }
  }, children);
};

AppHeaderDropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node
} : {};
export default AppHeaderDropdown;
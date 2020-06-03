import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

import {
  AppAside,
  AppAsideToggler,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav as AppSidebarNav,
  // AppSidebarNav2 as AppSidebarNav,
  AppSidebarToggler,
} from '../../../../src';
// sidebar nav config
import navigation from '../../_nav.js';
// routes config
import routes from '../../routes.js';

import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/img/avatars/6.jpg'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand
            full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo (Full)' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo (Min)' }}
          />
          <AppSidebarToggler className="d-md-down-none" display="sm" />
          <Nav className="ml-auto">
            <Nav.Item className="d-md-down-none">
              <Nav.Link eventKey="link-1"><i className="cui-bell icons font-xl d-block"></i><Badge pill variant="danger">5</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-md-down-none">
              <Nav.Link eventKey="link-2"><i className="cui-list icons icons font-xl d-block"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-md-down-none">
              <Nav.Link eventKey="link-3"><i className="cui-location-pin icons icons font-xl d-block"></i></Nav.Link>
            </Nav.Item>
            <AppHeaderDropdown>
              <Dropdown.Toggle as={NavLink}>
                <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight style={{ height: '400px' }}>
                AppHeaderDropdown
              </Dropdown.Menu>
            </AppHeaderDropdown>
          </Nav>
          <AppAsideToggler className="d-md-down-none" />
          <AppAsideToggler className="d-lg-none" mobile />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="md">
            <AppSidebarHeader />
            <AppSidebarForm />
            {/*<AppSidebarNav navConfig={navigation} {...this.props} />*/}
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            {/*<AppBreadcrumb appRoutes={routes}/>*/}
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>
            Aside
          </AppAside>
        </div>
        <AppFooter>
          <span><a href="https://coreui.io">CoreUI</a> &copy; 2020 creativeLabs</span>
          <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;

import Dashboard from './views/Dashboard/Dashboard.js';
import Dashboard2 from './views/Dashboard2/Dashboard2.js';
import Full from './containers/DefaultLayout/DefaultLayout.js';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard2', name: 'Dashboard2', component: Dashboard2 },
];

export default routes;

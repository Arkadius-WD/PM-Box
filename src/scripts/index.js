import '../style/style.scss';

import login from './login';
import headNav from './headNav';
import weather from './weather';
import schedule from './schedule';

// if (['/', '/index.html'].includes(window.location.pathname)) {
//   login();
// }

// if (
//   [
//     '/home.html',
//     '/schedule.html',
//     '/todo.html',
//     '/portfolio.html',
//     '/approvals.html',
//     '/budget.html',
//     '/files.html',
//     '/teams.html',
//     '/history.html',
//     '/git.html',
//   ].includes(window.location.pathname)
// ) {
//   headNav();
// }

// if ('/home.html'.includes(window.location.pathname)) {
//   weather();
// }
// if ('/schedule.html'.includes(window.location.pathname)) {
//   schedule();
// }

const path = window.location.pathname;

if (path.endsWith('/') || path.endsWith('index.html')) {
  login();
} else if (path.endsWith('/home.html')) {
  headNav();
  weather();
} else if (path.endsWith('/schedule.html')) {
  headNav();
  schedule();
}

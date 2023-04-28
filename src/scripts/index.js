import '../style/style.scss';

import login from './login';
import headNav from './headNav';
import weather from './weather';
import schedule from './schedule';

if (
  window.location.pathname.endsWith('/') ||
  window.location.pathname.endsWith('/index.html')
) {
  login();
}

if (
  window.location.pathname.endsWith('/home.html') ||
  window.location.pathname.endsWith('/schedule.html') ||
  window.location.pathname.endsWith('/todo.html') ||
  window.location.pathname.endsWith('/portfolio.html') ||
  window.location.pathname.endsWith('/approvals.html') ||
  window.location.pathname.endsWith('/budget.html') ||
  window.location.pathname.endsWith('/files.html') ||
  window.location.pathname.endsWith('/teams.html') ||
  window.location.pathname.endsWith('/history.html') ||
  window.location.pathname.endsWith('/git.html')
) {
  headNav();
}

if (window.location.pathname.endsWith('/home.html')) {
  weather();
}

if (window.location.pathname.endsWith('/schedule.html')) {
  schedule();
}

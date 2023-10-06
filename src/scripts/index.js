import '../style/style.scss';
import login from './login';
import mainNav from './mainNav';
import weather from './weather';
import calendar from './calendar';
import todoModule from './todo';
import portfolio from './portfolio';
import approvals from './approvals';
import budget from './budget';

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (!(path.endsWith('/') || path.endsWith('index.html'))) {
    mainNav();
  }
  if (path.endsWith('/') || path.endsWith('index.html')) {
    login();
  } else if (path.endsWith('home.html')) {
    weather();
  } else if (path.endsWith('calendar.html')) {
    calendar();
  } else if (path.endsWith('todo.html')) {
    todoModule();
  } else if (path.endsWith('portfolio.html')) {
    portfolio();
  } else if (path.endsWith('approvals.html')) {
    approvals();
  } else if (path.endsWith('budget.html')) {
    budget();
  }
});

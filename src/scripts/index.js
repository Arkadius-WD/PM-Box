import '../style/style.scss';
import login from './login';
import headNav from './headNav';
import weather from './weather';
import calendar from './calendar';

const path = window.location.pathname;

if (!(path.endsWith('/') || path.endsWith('index.html'))) {
  headNav();
}
if (path.endsWith('/') || path.endsWith('index.html')) {
  login();
} else if (path.endsWith('home.html')) {
  weather();
} else if (path.endsWith('calendar.html')) {
  calendar();
}

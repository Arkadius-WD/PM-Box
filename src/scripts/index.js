import '../style/style.scss';

import headNav from './headNav';
import weather from './weather';
import login from './login';

if (window.location.pathname.endsWith('/index.html')) {
  login();
}

if (window.location.pathname.endsWith('/home.html')) {
  headNav();
  weather();
}

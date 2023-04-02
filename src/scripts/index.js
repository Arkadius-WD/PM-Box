import '../style/style.scss';

import headNav from './headNav';
import weather from './weather';

if (window.location.pathname === '/home.html') {
  headNav();
  weather();
}

import '../style/style.scss';

import headNav from './headNav';
import weather from './weather';

if (window.location.pathname.endsWith('/home.html')) {
  headNav();
  weather();
}

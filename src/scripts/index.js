import '../style/style.scss';

import headNav from './headNav';
import weather from './weather';

// --   /dist/home.html  --//
if (window.location.pathname === '/dist/home.html') {
  headNav();
  weather();
}

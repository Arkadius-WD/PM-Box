const headNav = () => {
  const lowerBeam = document.querySelector('.lower-beam');
  const logo = document.querySelector('.logo');
  const talks = document.querySelector('.talks');
  const envelopeInside = document.querySelector('.envelope__inside');
  const mainContainer = document.querySelector('.main-container');
  const menuSettings = document.querySelector('.nav__menu-settings');
  const navSettingsIcon = document.querySelector('.nav__settings');
  const upperBeamSettings = document.querySelector('.upper-beam__settings');
  const upperBeamLogout = document.querySelector('.upper-beam__logout');
  const upperBeamAvatar = document.querySelector('.upper-beam__admin-avatar');
  const adminMenu = document.querySelector('.upper-beam__admin-menu');
  const menuList = document.querySelectorAll('.nav__menu-list li');
  const icons = document.querySelectorAll('.nav__icon');

  icons.forEach((icon, index) => {
    icon.setAttribute('data-id', index);
  });

  const saveStateToLocalStorage = () => {
    const state = {};
    menuList.forEach((menuItem, index) => {
      state[index] = menuItem.querySelector('input').checked;
    });
    localStorage.setItem('state', JSON.stringify(state));
  };

  const loadStateFromLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('state'));
    if (state) {
      menuList.forEach((menuItem, index) => {
        const input = menuItem.querySelector('input');
        input.checked = state[index];
        if (!state[index]) {
          icons[index].classList.add('hidden-nav-icon');
        }
      });
    }
  };

  window.addEventListener('load', loadStateFromLocalStorage);

  menuList.forEach((menuItem, index) => {
    const input = menuItem.querySelector('input');
    input.addEventListener('change', () => {
      const isChecked = input.checked;
      if (isChecked) {
        icons[index].classList.remove('hidden-nav-icon');
      } else {
        icons[index].classList.add('hidden-nav-icon');
      }
      saveStateToLocalStorage();
      loadStateFromLocalStorage();
    });
  });

  menuList.forEach((menuItem, index) => {
    const input = menuItem.querySelector('input');
    if (!input.checked) {
      icons[index].classList.add('hidden-nav-icon');
    }
  });

  loadStateFromLocalStorage();

  const showMenu = () => {
    lowerBeam.classList.toggle('beam-hidden');
    mainContainer.classList.toggle('main-transform');
  };

  const showTalks = () => {
    talks.classList.toggle('talks-hidden');
  };

  const showMenuSettings = () => {
    menuSettings.classList.toggle('menu-settings-active');
  };

  const showLogout = () => {
    upperBeamLogout.classList.toggle('logout-active');
    upperBeamSettings.classList.remove('admin-menu-active');
  };

  const showAdminMenu = () => {
    upperBeamSettings.classList.toggle('admin-menu-active');
    upperBeamLogout.classList.remove('logout-active');
  };

  logo.addEventListener('click', showMenu);
  envelopeInside.addEventListener('click', showTalks);
  navSettingsIcon.addEventListener('click', showMenuSettings);
  upperBeamAvatar.addEventListener('click', showLogout);
  adminMenu.addEventListener('click', showAdminMenu);
};

export default headNav;

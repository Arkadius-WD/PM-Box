const headNav = () => {
  const lowerBeam = document.querySelector('.lower-beam');
  const logo = document.querySelector('.logo');
  const talks = document.querySelector('.talks');
  const envelopeInside = document.querySelector('.envelope__inside');
  const mainContainer = document.querySelector('.main-container');
  const menuSettings = document.querySelector('.nav__menu-settings');
  const navSettingsIcon = document.querySelector('.nav__settings');
  const upperBeamSettings = document.querySelector('.upper-beam__settings');
  const adminMenu = document.querySelector('.upper-beam__admin-menu');

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

  const showAdminMenu = () => {
    upperBeamSettings.classList.toggle('admin-menu-active');
  };

  logo.addEventListener('click', showMenu);
  envelopeInside.addEventListener('click', showTalks);
  navSettingsIcon.addEventListener('click', showMenuSettings);
  adminMenu.addEventListener('click', showAdminMenu);
};

export default headNav;

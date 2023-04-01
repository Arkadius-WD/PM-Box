const headNav = () => {
  const lowerBeam = document.querySelector('.lower-beam');
  const logo = document.querySelector('.logo');
  const talks = document.querySelector('.talks');
  const envelopeInside = document.querySelector('.envelope__inside');
  const mainContainer = document.querySelector('.main-container');

  const showMenu = () => {
    lowerBeam.classList.toggle('beam-hidden');
    mainContainer.classList.toggle('main-transform');
  };

  const showTalks = () => {
    talks.classList.toggle('talks-hidden');
  };

  logo.addEventListener('click', showMenu);

  envelopeInside.addEventListener('click', showTalks);
};

export default headNav;

const nav = () => {
  const lowerBeam = document.querySelector('.lower-beam');
  const logo = document.querySelector('.logo');
  const talks = document.querySelector('.talks');
  const envelopeInside = document.querySelector('.envelope__inside');

  const showMenu = () => {
    lowerBeam.classList.toggle('beam-hidden');
  };

  const showTalks = () => {
    talks.classList.toggle('talks-hidden');
  };

  logo.addEventListener('click', showMenu);
  envelopeInside.addEventListener('click', showTalks);
};

export default nav;

const login = () => {
  const startLogo = document.querySelector('.start__logo');
  const startLogin = document.querySelector('.start__login');
  const startBtn = document.querySelector('.start__btn');

  const showLogin = () => {
    startLogin.classList.toggle('login-hidden');
  };

  const openHome = () => {
    window.location.href = './home.html';
  };

  startLogo.addEventListener('click', showLogin);
  startBtn.addEventListener('click', openHome);
};

export default login;

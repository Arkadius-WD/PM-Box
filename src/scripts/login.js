const login = () => {
  const startLogo = document.querySelector('.start__logo');
  const startLogin = document.querySelector('.start__login');

  const showLogin = () => {
    startLogin.classList.toggle('login-hidden');
  };

  startLogo.addEventListener('click', showLogin);
};

export default login;

const login = () => {
  const startLogo = document.querySelector('.start__logo');
  const startLogin = document.querySelector('.start__login');
  const startBtn = document.querySelector('.start__btn');
  const user = document.getElementById('username');
  const pass = document.getElementById('password');

  const username = 'Arkadius';
  const password = '12345';

  const showLogin = () => {
    startLogin.classList.toggle('login-hidden');
  };

  const openHome = () => {
    if (user.value === '' || password.value === '') {
      user.placeholder = 'Enter username';
      user.classList.add('error');
      pass.placeholder = 'Enter password';
      pass.classList.add('error');
      return;
    }

    if (user.value === username && pass.value === password) {
      window.location.href = './home.html';
    } else if (user.value === username) {
      pass.value = '';
      pass.placeholder = 'Invalid password';
      pass.classList.add('error');
    } else {
      user.value = '';
      pass.value = '';
      user.placeholder = 'Invalid username';
      user.classList.add('error');
      pass.placeholder = 'Invalid password';
      pass.classList.add('error');
    }
  };

  const loginCheck = e => {
    if (e.key === 'Enter') {
      openHome();
    }
  };
  user.addEventListener('keyup', loginCheck);
  pass.addEventListener('keyup', loginCheck);

  startLogo.addEventListener('click', showLogin);
  startBtn.addEventListener('click', openHome);
};

export default login;

const budget = () => {
  const account1 = {
    title: 'Project #00015',
    movements: [4500, -1000, -130, -70, -100],
  };

  const account2 = {
    title: 'Project #00013',
    movements: [5000, -3400, -150, -30],
  };

  const account3 = {
    title: 'Project #00011',
    movements: [200, -20, -80, -100, 50],
  };
  const account4 = {
    title: 'Project #00010',
    movements: [2000, -200, 340, -300, -20, -460],
  };

  const accounts = [account1, account2, account3, account4];

  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['PLN', 'Zloty'],
  ]);

  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');

  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');

  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');

  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');

  const displayMovements = movements => {
    containerMovements.innerHTML = '';

    movements.forEach((mov, i) => {
      const type = mov > 0 ? 'ADD_BUDGET' : 'GROSS';

      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} €</div>
        </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  displayMovements(account1.movements);

  let balance = 0;
  let incomes = 0;
  let out = 0;

  const calcDisplayBalance = movements => {
    balance = movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${balance} €`;
  };
  calcDisplayBalance(account1.movements);

  const calcDisplaySummary = movements => {
    incomes = movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} €`;

    out = Math.abs(
      movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0),
    );
    labelSumOut.textContent = `${out} €`;
  };
  calcDisplaySummary(account1.movements);

  const calcRest = () => {
    const rest = (((incomes - out) / incomes) * 100).toFixed(1);
    labelSumInterest.textContent = `${rest} %`;
  };

  calcRest();

  const createNumberProject = accs => {
    accs.forEach(acc => {
      const projectNumber = acc.title.split(' ');
      const lastWord = projectNumber[projectNumber.length - 1];
      acc.project = lastWord.slice(-6);
    });
  };
  createNumberProject(accounts);
};

export default budget;

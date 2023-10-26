const budget = () => {
  const project00015 = {
    number: '#00015',
    movements: [50000, -10000, -11200.5, -1000, 20000, -5000, 10000],
  };

  const project00013 = {
    number: '#00013',
    movements: [150000, -34000, -15000, -30000],
  };

  const project00011 = {
    number: '#00011',
    movements: [20000, -2000, -8000, -10000],
  };
  const project00010 = {
    number: '#00010',
    movements: [],
  };

  const accounts = [project00015, project00013, project00011, project00010];

  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['PLN', 'Zloty'],
  ]);

  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');

  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');

  const inputChangeProject = document.querySelector('.input__change-project');
  const inputSelectProject = document.getElementById('change-project');

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

  let currentAccount = project00015;

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

    const html2 = `<button class="btn--sort">&downarrow; SORT</button>`;
    containerMovements.insertAdjacentHTML('beforeend', html2);
  };

  const balance = 0;
  let incomes = 0;
  let out = 0;

  const calcDisplayBalance = acc => {
    acc.balance = balance;
    acc.balance = acc.movements.reduce(
      (accumulator, mov) => accumulator + mov,
      0,
    );
    labelBalance.textContent = `${acc.balance} €`;
  };

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

  const calcRest = () => {
    const rest = (((incomes - out) / incomes) * 100).toFixed(1);
    labelSumInterest.textContent = `${rest} %`;
  };

  const createNumberProject = accs => {
    accs.forEach(acc => {
      const projectNumber = acc.number.split(' ');
      const lastWord = projectNumber[projectNumber.length - 1];
      acc.project = lastWord.slice(-6);
    });
  };
  createNumberProject(accounts);

  const displayFunction = acc => {
    displayMovements(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc.movements);
    calcRest();
  };
  displayFunction(currentAccount);

  inputChangeProject.addEventListener('click', e => {
    e.preventDefault();
    const selectedOption =
      inputSelectProject.options[inputSelectProject.selectedIndex];

    currentAccount = accounts.find(acc => acc.project === selectedOption.value);

    if (currentAccount.number === selectedOption.value) {
      displayFunction(currentAccount);
    }
  });

  btnTransfer.addEventListener('click', e => {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.project === inputTransferTo.value,
    );

    if (amount <= 0 || currentAccount.balance < amount) return;

    if (receiverAcc && receiverAcc.project !== currentAccount.project) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
    } else if (!receiverAcc && inputTransferTo.value === '') {
      currentAccount.movements.push(-amount);
    } else if (receiverAcc && receiverAcc.project === currentAccount.project) {
      currentAccount.movements.push(-amount);
    }

    inputTransferTo.value = '';
    inputTransferAmount.value = '';

    displayFunction(currentAccount);
  });

  btnLoan.addEventListener('click', e => {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);

    if (amount <= 0) return;

    if (amount >= 0) {
      currentAccount.movements.push(amount);
      displayFunction(currentAccount);
    }

    inputLoanAmount.value = '';
  });

  let originalMovements = [];

  containerMovements.addEventListener('click', event => {
    const selectedOption =
      inputSelectProject.options[inputSelectProject.selectedIndex];
    currentAccount = accounts.find(acc => acc.project === selectedOption.value);

    if (event.target.classList.contains('btn--sort')) {
      if (originalMovements.length === 0) {
        originalMovements = [...currentAccount.movements];
        currentAccount.movements.sort();
      } else {
        currentAccount.movements = [...originalMovements];
        originalMovements = [];
      }

      displayFunction(currentAccount);
    }
  });
};

export default budget;

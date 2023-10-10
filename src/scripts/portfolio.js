const portfolio = () => {
  const buttonApprovals = document.querySelector('[data-id="12"]');
  const buttonTodo = document.querySelector('[data-id="17"]');
  const buttonMessages = document.querySelector('[data-id="34"]');
   const approvalWindow = document.querySelector('.notify-1');
  const todoWindow = document.querySelector('.notify-2');
  const messagesWindow = document.querySelector('.notify-3');
  const closeButton1 = document.querySelector(
    '.close-button[data-window="notify-1"]',
  );
  const closeButton2 = document.querySelector(
    '.close-button[data-window="notify-2"]',
  );
  const closeButton3 = document.querySelector(
    '.close-button[data-window="notify-3"]',
  );

  buttonApprovals.addEventListener('click', () => {
    approvalWindow.classList.toggle('hidden');
  });

  buttonTodo.addEventListener('click', () => {
    todoWindow.classList.toggle('hidden');
  });

  buttonMessages.addEventListener('click', () => {
    messagesWindow.classList.toggle('hidden');
  });

  closeButton1.addEventListener('click', () => {
    approvalWindow.classList.toggle('hidden');
  });
  closeButton2.addEventListener('click', () => {
    todoWindow.classList.toggle('hidden');
  });
  closeButton3.addEventListener('click', () => {
    messagesWindow.classList.toggle('hidden');
  });
};
export default portfolio;

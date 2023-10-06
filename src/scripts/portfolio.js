const portfolio = () => {
  const buttonApprovals = document.querySelector('[data-id="12"]');
  const buttonTodo = document.querySelector('[data-id="17"]');
  const buttonMessages = document.querySelector('[data-id="34"]');

  buttonApprovals.addEventListener('click', () => {
    console.log('Button Approve');
  });
  buttonTodo.addEventListener('click', () => {
    console.log('Button Todo');
  });
  buttonMessages.addEventListener('click', () => {
    console.log('Button Messages');
  });
};
export default portfolio;

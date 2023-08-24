const todoModule = () => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function displayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      const span = document.createElement('span');
      const contentDiv = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');

      checkbox.type = 'checkbox';
      checkbox.checked = todo.done;
      span.classList.add('bubble');
      if (todo.category === 'personal') {
        span.classList.add('personal');
      } else {
        span.classList.add('business');
      }
      contentDiv.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');

      contentDiv.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
      edit.textContent = 'Edit';
      deleteButton.textContent = 'Delete';

      label.appendChild(checkbox);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(contentDiv);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);

      if (todo.done) {
        todoItem.classList.add('done');
      }

      checkbox.addEventListener('change', e => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));

        if (todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }

        displayTodos();
      });

      edit.addEventListener('click', () => {
        const input = contentDiv.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', () => {
          input.setAttribute('readonly', true);
          todo.content = input.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          displayTodos();
        });
      });

      deleteButton.addEventListener('click', () => {
        todos = todos.filter(t => t !== todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
      });
    });
  }

  window.addEventListener('load', () => {
    const newTodoForm = document.querySelector('#new-todo-form');

    newTodoForm.addEventListener('submit', e => {
      e.preventDefault();

      const todo = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime(),
      };

      todos.push(todo);

      localStorage.setItem('todos', JSON.stringify(todos));

      // Reset form
      e.target.reset();

      displayTodos();
    });

    displayTodos();
  });
};

export default todoModule;

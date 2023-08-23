const todoModule = () => {
  let todos = [];

  function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');

      input.type = 'checkbox';
      input.checked = todo.done;
      span.classList.add(
        'bubble',
        todo.category === 'personal' ? 'personal' : 'business',
      );
      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');

      const contentInput = document.createElement('input');
      contentInput.type = 'text';
      contentInput.value = todo.content;
      contentInput.readOnly = true;

      content.appendChild(contentInput);
      edit.textContent = 'Edit';
      deleteButton.textContent = 'Delete';

      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);

      if (todo.done) {
        todoItem.classList.add('done');
      }

      input.addEventListener('change', () => {
        todo.done = input.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
        todoItem.classList.toggle('done', todo.done);
      });

      edit.addEventListener('click', () => {
        contentInput.readOnly = false;
        contentInput.focus();

        contentInput.addEventListener('blur', () => {
          contentInput.readOnly = true;
          todo.content = contentInput.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        });
      });

      deleteButton.addEventListener('click', () => {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });
  }

  window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';
    nameInput.value = username;

    nameInput.addEventListener('input', e => {
      localStorage.setItem('username', e.target.value);
    });

    newTodoForm.addEventListener('submit', e => {
      e.preventDefault(); // Prevent the default form submission behavior

      const todo = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime(),
      };

      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));

      // Reset the form
      e.target.reset();

      DisplayTodos();
    });

    DisplayTodos();
  });
};

export default todoModule;

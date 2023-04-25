export function getTodos() {
  return fetch(
    'https://react-movies-b39d0-default-rtdb.firebaseio.com/todos.json'
  )
    .then((res) => res.json())
    .then((data) => {
      const loadedTodos = [];

      for (const key in data) {
        loadedTodos.push({
          id: key,
          title: data[key].title,
        });
      }

      return loadedTodos;
    });
}

export function addTodo(text: string) {
  if (text.length < 3) {
    throw new Error('Todo title should be at least 3 characters long.');
  }

  return fetch(
    'https://react-movies-b39d0-default-rtdb.firebaseio.com/todos.json',
    {
      method: 'POST',
      body: JSON.stringify({ title: text }),
    }
  );
}

export function patchTodo(id: string, text: string) {
  if (text.length < 3) {
    throw new Error('Todo title should be at least 3 characters long.');
  }

  return fetch(
    `https://react-movies-b39d0-default-rtdb.firebaseio.com/todos/${id}.json`,
    {
      method: 'PATCH',
      body: JSON.stringify({ title: text }),
    }
  );
}

export function deleteTodo(id: string) {
  return fetch(
    `https://react-movies-b39d0-default-rtdb.firebaseio.com/todos/${id}.json`,
    {
      method: 'DELETE',
    }
  );
}

import { Link, Outlet, useLoaderData } from 'react-router-dom';

import { getTodos } from '../utilities/todoAPI';

import TodoList from '../components/TodoList';

export default function Home() {
  const todos = useLoaderData() as [{ id: string; title: string }];

  return (
    <>
      <Link to="/new">
        <button>Add Todo</button>
      </Link>
      <TodoList todos={todos} />
      <Outlet />
    </>
  );
}

export function loader() {
  return getTodos();
}

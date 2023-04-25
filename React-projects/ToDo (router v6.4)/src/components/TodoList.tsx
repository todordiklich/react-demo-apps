import { Link } from 'react-router-dom';

export default function TodoList({
  todos,
}: {
  todos: [{ id: string; title: string }];
}) {
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link to={todo.id}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

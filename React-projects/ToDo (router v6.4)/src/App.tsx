import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home, { loader as toDosLoader } from './routes/Home';
import Error from './routes/Error';
import AddTodo, { action as addToDoAction } from './routes/AddTodo';
import SelectedTodo, {
  action as selectedTodoAction,
} from './routes/SelectedTodo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    loader: toDosLoader,
    id: 'home',
    children: [
      {
        path: ':id',
        element: <SelectedTodo />,
        action: selectedTodoAction,
      },
      {
        path: 'new',
        element: <AddTodo />,
        action: addToDoAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

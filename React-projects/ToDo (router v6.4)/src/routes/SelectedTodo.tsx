import {
  useRouteLoaderData,
  useParams,
  Form,
  redirect,
} from 'react-router-dom';

import Modal from '../components/Modal';
import { deleteTodo, patchTodo } from '../utilities/todoAPI';

export default function Todo() {
  const params = useParams();
  const todos = useRouteLoaderData('home') as [{ id: string; title: string }];
  const todo: { id: string; title: string } | undefined = todos.find(
    (t) => t.id === params.id
  );

  if (todo == undefined) {
    throw new Error(`There is no Todo with Id: "${params.id}".`);
  }

  return (
    <Modal>
      <Form method="PATCH">
        <h1>Todo: {todo.title}</h1>
        <label htmlFor="text">Update title: </label>
        <input type="text" name="text" id="text" />
        <p className="form-action">
          <button>Update Todo</button>
        </p>
      </Form>
      <Form method="DELETE">
        <p className="form-action">
          <button className="btn-alt">Delete Todo</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const formData = await request.formData();
  const text = formData.get('text');
  const todoId = params.id;

  if (request.method === 'PATCH') {
    await patchTodo(todoId, text as string);
  }

  if (request.method === 'DELETE') {
    await deleteTodo(todoId);
  }

  return redirect('/');
}

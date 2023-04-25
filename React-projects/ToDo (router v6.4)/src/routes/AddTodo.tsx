import { Form, redirect } from 'react-router-dom';

import Modal from '../components/Modal';
import { addTodo } from '../utilities/todoAPI';

export default function NewTodo() {
  return (
    <Modal>
      <Form method="post">
        <p>
          <label htmlFor="text">Your todo </label>
          <input type="text" name="text" id="text"></input>
        </p>
        <p>
          <button type="submit">Save Todo</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const text = formData.get('text');
  if (text !== null) {
    await addTodo(text as string);
  }
  return redirect('/');
}

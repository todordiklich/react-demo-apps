import { useRouteError } from 'react-router-dom';

import Modal from '../components/Modal';

export default function Error() {
  const error = useRouteError() as { message: string };

  return (
    <Modal>
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </Modal>
  );
}

import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendrequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    props.onAddTask({ id: taskData.name, text: taskText });
  };

  const enterTaskHandler = (taskText) => {
    sendTaskRequest(
      {
        url: 'https://react-movies-b39d0-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: { 'Contrnt-type': 'application/json' },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

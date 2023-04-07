import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    // Todo: Handle the creation of new posts and send new post data to
    //https://jsonplaceholder.typicode.com/posts (via a POST) request
    setIsSendingRequest(true);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: enteredTitle,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        props.onAddNewPost(data);
        setIsSendingRequest(false);
        setEnteredTitle('');
      });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>{isSendingRequest ? 'Saving...' : 'Save'}</button>
    </form>
  );
}

export default NewPost;

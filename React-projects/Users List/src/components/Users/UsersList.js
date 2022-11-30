import styles from './UsersList.module.css';

import User from './User';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length !== 0
          ? props.users.map((user) => (
              <User
                key={Math.random().toString()}
                username={user.username}
                age={user.age}
              />
            ))
          : 'No users found.'}
      </ul>
    </Card>
  );
};

export default UserList;

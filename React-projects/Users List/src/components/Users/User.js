const User = (props) => {
  return (
    <li>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default User;

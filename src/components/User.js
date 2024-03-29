import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user">
      <h1>Count : {count}</h1>
      <h1>Count2 :{count2}</h1>
      <h1>Name:{props.name}</h1>
      <h2>Location:Hyderabad</h2>
      <h2>Software Engineers</h2>
    </div>
  );
};

export default User;

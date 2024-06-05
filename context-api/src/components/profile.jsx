import React, { useContext } from 'react';
import UserContext from '../Context/Usercontext';

function Profile() {
  const{user} = useContext(UserContext);

  if(!user) return <h1>Not Logged In</h1>;
  return (
    <div>
      Profile : 
      <h1>Your name is {user.username}</h1>
      <h2>Your Password is {user.password}</h2>
    </div>
  );
}

export default Profile

 
import React from 'react';
import {useDispatch} from "react-redux"; //modifies values of state

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button>Login</button>
    </div>
  );
}

export default Login;

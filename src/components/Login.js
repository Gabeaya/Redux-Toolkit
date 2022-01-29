import React from 'react';
import {useDispatch} from "react-redux"; //modifies values of state
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button 
        onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com"}));
        }}
      >
        Login
      </button>
      <button 
        onClick={() => {
          dispatch(logout());
        }}
        >
        </button>
    </div>
  );
}

export default Login;

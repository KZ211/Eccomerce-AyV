import React from "react";

function Login(){
  return <form className="form">
    <label htmlFor="user">User</label>
    <label htmlFor="password">password</label>
    <input id="user" placeholder="user"></input>
    <input id="password" placeholder="password"></input>
    <button>Login</button>
  </form>
}

export default Login;
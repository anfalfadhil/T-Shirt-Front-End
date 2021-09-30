import React from "react";
import Input from "./Input";

const Auth = () => {
  return (
    <div>
      <h2>Don't have an account? that's okay, Go to Home Page </h2>
      <button>Go</button>
      <hr />
      <p> or </p>
      <Input element="input" type="text" lable="login" />
    </div>
  );
};

export default Auth;

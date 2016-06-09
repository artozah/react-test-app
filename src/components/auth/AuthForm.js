import React from 'react';
import TextInput from '../common/TextInput';

const AuthForm = ({user, onSignin, onLogin, onChange}) => {
  return (
    <form>
      <h1>Authentication</h1>
      <TextInput
        name="email"
        label="Email"
        onChange={onChange}
        value={user.email}
        />

      <TextInput
        name="password"
        label="Password"
        onChange={onChange}
        value={user.password}
        />

      <input
        type="submit"
        value="Signing"
        className="btn btn-primary"
        onClick={onSignin}/>

      <input
        type="submit"
        value="Login"
        className="btn btn-primary"
        onClick={onLogin}/>
    </form>
  );
};

AuthForm.propTypes = {
  onSignin: React.PropTypes.func.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default AuthForm;

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import InputGroup from './InputGroup';
import { EntryPage, PageHeader } from './entryPage';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';
import loginAsync from '../../redux/actions/loginAction';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputType, setInputType] = useState('password');
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  function validateForm() {
    return loginInfo.email.length > 0 && loginInfo.password.length > 0;
  }

  const state = useSelector((state) => state.login);

  const submitLogin = async (e) => {
    e.preventDefault();
    const success = await dispatch(loginAsync(loginInfo));
    setLoginInfo({
      email: '',
      password: '',
    });
    if (success === 'logged in!') {
      history.push('/');
    } else {
      console.log(success);
    }
  };

  //redirect users to home page after login


  // useEffect(() => {
  //   if ((state.data.token !== null )) {
  //     history.push('/')
  //   }
  // }, [state])

  return (
    <>
      <PageHeader to="/">
        <div className="logo">
          <span className="color">
            {' '}
            Motorify
            <i className="fas fa-car" />
          </span>
        </div>
      </PageHeader>
      <div className="flex">
        <Card>
          <h3>Login</h3>

          <form>
            <InputGroup>
              <Input
                name="email"
                value={loginInfo.email}
                onChange={handleInput}
                autoComplete="off"
                type="email"
                placeholder="Enter email"
                id="login-email"
              />
            </InputGroup>

            <InputGroup>
              <div className="flex3">
                <div className="label-eye-wrapper">
                  {inputType === 'password' ? (
                    <AiOutlineEye onClick={() => setInputType('text')} />
                  ) : (
                    <AiFillEye onClick={() => setInputType('password')} />
                  )}
                </div>
              </div>
              <Input
                name="password"
                value={loginInfo.password}
                onChange={handleInput}
                autoComplete="off"
                type={inputType}
                placeholder="Enter password"
                id="login-password"
              />
            </InputGroup>

            <div className="flex3">
              <Link to="/forgot-password"> Forgot your password? </Link>{' '}
            </div>

            {state.isLoading ? (
              <h2>Loading... </h2>
            ) : (
              <h2>{state.error.data.message || ''} </h2>
            )}

            <Button
              type="submit"
              onClick={submitLogin}
              disabled={!validateForm()}
            >
              Login
            </Button>
          </form>

          <span>
            Don't have an account?
            <Link to="/sign-up"> Signup</Link>
          </span>
        </Card>
      </div>
    </>
  );
};
export default Login;

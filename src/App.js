import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from './redux/login/actions';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.login.data);

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    console.log('log handle change');
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit login');
    dispatch(postLogin(userData));
  }

  const handleLogOut = () => {
    localStorage.clear();
  }

  console.log('userData =>', userData);
  console.log('data =>', data);

  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>Email</p>
      <input
        type="email"
        name="email"
        placeholder="type you email here..."
        onChange={handleChange}
      />

      <p>Password</p>
      <input
        type="password"
        name="password"
        placeholder="type your password here ..."
        onChange={handleChange}
      />

      <br />
      <button type="submit" onClick={onSubmit}>Log In</button>
      <p>Logged in as: {data.email}</p>

      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default App;

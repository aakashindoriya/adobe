import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNewUser,getAllusers,updateUser,deleteUser,getUserById } from './redux/actions/user.actions';

function App() {
  const dispatch=useDispatch()
  const user=useSelector(s=>s.user)
  useEffect(()=>{
    dispatch(getUserById("64311a1feb13020cc1730f9c"))
  },[])
 console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

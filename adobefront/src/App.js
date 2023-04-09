import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChakraModal from './components/ChakraModal';
import CreateUserForm from './components/UserForm';
import CreatePostForm from './components/PostForm';
import { getAllusers } from './redux/actions/user.actions';

function App() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllusers())
},[])
  return (
    <>
    <ChakraModal>
      <CreatePostForm />
    </ChakraModal>
    </>
  );
}

export default App;

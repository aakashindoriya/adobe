
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getAllusers } from './redux/actions/user.actions';
import { getAllposts } from './redux/actions/post.actions';
import Allroutes from './allroutes/Allroutes';
import Navbar from './pages/Navbar';

function App() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllusers())
dispatch(getAllposts())
},[])
  return (
    <>
    <Navbar />
    <Allroutes />
    </>
  );
}

export default App;

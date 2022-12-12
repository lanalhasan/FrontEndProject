import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signout' element={<SignOut/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    
      </>
    )
}

export default App;

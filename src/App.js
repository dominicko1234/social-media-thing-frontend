import {
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './navigation/Navbar';
import Login from './user/Login';
import SignUp from './user/SignUp';
import ResetPassword from './user/ResetPassword';
import Messages from './user/Messages';
import { useEffect, useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/sign-in" />}/>
          <Route path="/my-messages" element={loggedIn ? <Messages /> : <Navigate to="/sign-in" />}/>
          <Route path="/sign-in" element={<Login handleLogin={handleLogin} loggedIn={loggedIn}/>}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

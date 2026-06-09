import { useState } from 'react'
import './App.css'

import LoginButton from './lab-9-login-logout/LoginButton'
import LogoutButton from './lab-9-login-logout/LogoutButton'
import HomePage from './lab-9-login-logout/HomePage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  return (
    <>
      {loggedIn ? (
        <div>
          <HomePage />
          <LogoutButton logout={logout} />
        </div>
      ) : (
        <LoginButton login={login} />
      
      )} 
    </>
  )
}
export default App
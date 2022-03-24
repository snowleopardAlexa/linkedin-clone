import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Sidebar from './components/AppBody/Sidebar'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

function App() {

const user = useSelector(selectUser)

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      // user logged in

    } else {
      // user logged out
    }
  })
}, [])

  return (
    <>
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      )}
    </div>
    </>
  );
}

export default App;

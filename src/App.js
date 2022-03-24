import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Sidebar from './components/AppBody/Sidebar'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { selectUser, login, logout } from './features/userSlice'
import { auth } from './firebase'

function App() {

const user = useSelector(selectUser)
const dispatch = useDispatch()

useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      // user logged in
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      }))
    } else {
      // user logged out
      dispatch(logout())
    }
  })
}, [dispatch])

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

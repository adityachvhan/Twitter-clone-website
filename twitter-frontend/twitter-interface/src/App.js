import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Authentication from './components/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './Store/Auth/Action';
function App() {

  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector(store => store)
  const dispatche = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {

    if (jwt) {
      dispatche(getUserProfile(jwt))
      navigate("/")
    }

  }, [auth.jwt])

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={auth.user ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

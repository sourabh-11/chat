
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import LoginForm from '../screens/LoginForm'
import Home from '../screens/Home'
import Registerform from '../screens/RegisterUser'

const AppRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<LoginForm/>}/>
         <Route path='/Register' element={<Registerform/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default AppRoute
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ModernPage from './pages/Modern.page'
import SignInPage from './pages/auth/SignIn.page'
import SignUpPage from './pages/auth/SignUp.page'
import HomePage from './pages/Home.page'
import ContactPage from './pages/Contact.page'
import NotFoundPage from './pages/NotFound.page'
const App = () => {
  return (
    <div>
        
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/sign_up' element={<SignUpPage />} />
      <Route path='/home' element={<HomePage />} >
        <Route path='contact' element={<ContactPage />} />
        <Route path='modern' element={<ModernPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    </div>
  )
}
export default App
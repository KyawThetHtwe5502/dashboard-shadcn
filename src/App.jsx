import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ModernPage from './pages/Modern.page'
const App = () => {
  return (
    <Routes>
      <Route path='/modern' element={<ModernPage/>} />
    </Routes>
  )
}

export default App
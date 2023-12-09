import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetItem from './pages/GetItem'
import AddItem from './pages/AddItem'
import DeleteItem from './pages/DeleteItem'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/get-item' element={<GetItem />} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/delete-item' element={<DeleteItem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
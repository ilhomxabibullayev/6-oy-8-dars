import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Admin from '../pages/Admin'

export default function Router() {
    return (
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}

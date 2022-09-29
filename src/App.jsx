import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Barra } from './components/Barra'
import { Formulario } from './Formulario'
import { Mejor } from './pages/Mejor'

export const App = () => {
    return (
        <BrowserRouter>
            <Barra />

            <Routes>
                <Route path='/' element={<Formulario />}></Route>
                <Route path='/Mejor' element={<Mejor />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

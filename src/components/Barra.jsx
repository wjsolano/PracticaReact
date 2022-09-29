import { AppBar, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Barra = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to='/' style={{ textDecoration: 'none' }}>Formulario</Link>
                </Typography>

                <Typography variant="h6" >
                    <Link to='/Mejor' style={{ textDecoration: 'none' }}>Mejor de la historia</Link>
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

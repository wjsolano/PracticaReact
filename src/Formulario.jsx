import { Button, ButtonGroup, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Barra } from './components/Barra'

export const Formulario = () => {

    const [texto, setTexto] = useState('');

    const handleeFeli = () => {
        setTexto('maravilloso dia');
    }

    const handleeEnojado = () => {
        setTexto('dia de la fregada');
    }




    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <h3>Escriba su nombre</h3>
            <TextField placeholder='Mensaje' sx={{ m: 0.5, width: '25ch' }} value='ds'></TextField>

            <br />

            <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={handleeFeli}>Felii</Button>
                <Button onClick={handleeEnojado}>Enojao</Button>
            </ButtonGroup>


            <InputLabel >Hoy es un: {texto}</InputLabel>

        </form >
    )
}

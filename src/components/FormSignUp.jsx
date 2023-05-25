
// este import es necesario para los componentes que yo uso y lo tomo desde la pagina de mui.com
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


import { useState } from 'react';

// y los componentes se utilizan con sus diferentes variables que las recibe por el atributo variant, tambien se les puede cambiar el color y tamanio y demas cosas, solo es de fijarse en la pagina cuales son los atributos que recibe
// estos  variant="text">  variant="contained">  variant="outlined">
//los atributos entre los componentes pueden varian este es solo un ejemlplo de los que llevan los buttom

// en la pagina en el componente que me encuentre abajo hay un apartado que dice API y tiene una lista en esa lista al final esta el nomnbre del y link del componente si presion ahi me redirije a todos sus atributos de ese componente es importante eso para saber que es lo que quiero aplicarle que estilo por ejemplo el atributo margin y todos esos 

function FormSignUp() {

    //variables para controlar los estados de los input
    // esta forma de manipular los daros se llama controlled components/ componentes controlado, es mas que todo para controlar los datos ingresados en formulario como para hacer validaciones de datos antes de enviarlos
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [promociones, setPromociones] = useState(true)
    const [novedades, setNovedades] = useState(true)


    const manejarEnvio = (e) => {
        //el e.preventDefault es el encargado de NO recargar la pagina y solo llamar a esta funcion y realizar lo que este escrito aquí, claro el formulario llama a la funcion onSubmit y le pasa por parametro esta funcion
        e.preventDefault()
        console.log({name, lastName, email, promociones, novedades})
    } 

    
    return ( 

        <form onSubmit={manejarEnvio}>
          
            <TextField id='name' label="Nombre" variant='outlined'  fullWidth margin='normal' value={name} onChange={(e) => { setName(e.target.value) }}/>

            <TextField id='lastName' label="Apellidos" variant='outlined' fullWidth margin='normal'  value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>

            <TextField id='email' label="Email" variant='outlined' fullWidth margin='normal' value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Promociones"  value={promociones} onChange={(e) => { setPromociones(!promociones) }} />
                <FormControlLabel control={<Switch defaultChecked />} label="Novedades" value={novedades} onChange={(e) => { setNovedades(!novedades) }} />
            </FormGroup>
            
            <Button variant="contained" type='submit' >Registrar</Button>

        </form>
    
    )
    
    
}


export default  FormSignUp
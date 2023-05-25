
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



   //useState para controlar las condiciones de lo que quiero en mis textfield 
   const [errorName, setErrorName] = useState(false)
   // funcion que va a estar siendo llamada cada vez que le quite el foco al textfield name
   //esto gracias al atrubuto que le agregue al textfield (onBlur) el cual se encarga de llamar a esta funcion
   const handleChangeName = (e) => {
        setErrorName(e.target.value.length < 3 ? true : false);
   }


    const manejarEnvio = (e) => {
        //el e.preventDefault es el encargado de NO recargar la pagina y solo llamar a esta funcion y realizar lo que este escrito aquí, claro el formulario llama a la funcion onSubmit y le pasa por parametro esta funcion
        e.preventDefault()
        
      //antes de enviar los datos, primero verifico que todo este correcto, por ejemplo que el nombre sea mayor que 3 caracteres
        if(!errorName){
            setName("")
            setLastName("")
            setEmail("")
            //envio los datos este consoloe.log es una simulacion del envio
            console.log({name, lastName, email, promociones, novedades})
        }else{
            console.log("Complete todo de forma correcta")
        }
       
    } 

    
    return ( 

        <form onSubmit={manejarEnvio} >
          
            <TextField id='name' label="Nombre" variant='outlined' required  fullWidth margin='normal' value={name}  onChange={(e) => { setName(e.target.value) }} error={errorName} helperText={errorName ? 'Mínimo 3 caracteres requeridos' : ''} onBlur={handleChangeName}  />

            <TextField id='lastName' label="Apellidos" variant='outlined' fullWidth margin='normal'  value={lastName} onChange={(e) => { setLastName(e.target.value) }}  />

            <TextField id='email' label="Email" variant='outlined' fullWidth margin='normal' value={email} onChange={(e) => { setEmail(e.target.value) }}  helperText="Puede ser solo un texto informativo sin una validacion"  />

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Promociones"  value={promociones} onChange={(e) => { setPromociones(!promociones) }} />
                <FormControlLabel control={<Switch defaultChecked />} label="Novedades" value={novedades} onChange={(e) => { setNovedades(!novedades) }} />
            </FormGroup>
            
            <Button variant="contained" type='submit' >Registrar</Button>

        </form>
    
    )
    
    
}


export default  FormSignUp
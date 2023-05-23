
// este import es necesario para los componentes que yo uso y lo tomo desde la pagina de mui.com
import Button from '@mui/material/Button';
// y los componentes se utilizan con sus diferentes variables que las recibe por el atributo variant, tambien se les puede cambiar el color y tamanio y demas cosas, solo es de fijarse en la pagina cuales son los atributos que recibe
// estos  variant="text">  variant="contained">  variant="outlined">
//los atributos entre los componentes pueden varian este es solo un ejemlplo de los que llevan los buttom



function FormSignUp() {

    return ( 

        <form>
            <label>Nombre</label>
            <input type="text"/>

            <label>Apellidos</label>
            <input type="text"/>

            <label>Email</label>
            <input type="email"/>
            
            <label>Promociones</label>
            <input type="checkbox"/>

            <label>Novedades</label>
            <input type="checkbox"/>
            <Button variant="contained">Registrar</Button>
        </form>
    
    )
    
    
}


export default  FormSignUp
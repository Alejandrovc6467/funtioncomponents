
import './App.css';



//mis import
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FormSignUp from './components/FormSignUp';
import  Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';


//➡️ este proyecto busca explicar y dar un ejemplo de las diferencias de un componente de clase y un componente funcional, los ejemplos estan en los archivos ClassComponent y FuncComponent, si los quiero ver en en accion los llamo en el App.js y listo, solo para ver ejemplo corriendo
//ademas se utiliza ➡️Material UI➡️ en este proyecto , este es el comando para instalar esa libreria  npm install @mui/material @emotion/react @emotion/styled   en esta misma url estan los componentes de donde voy a sacar el codigo  https://mui.com/material-ui/getting-started/installation/



//utilizo un Container para envolver todo el form y el h2, esto es un componente de mui, se encuentra en la pagina oficial en components en el aprtado de layouts, lo presionas y vas a la API, Ahi estan todos los atributos que recibe y asi voy a ssaber que me serviria usar en cada caso
// ahora si yo quisier poner mi formulario a la izquierda y otra cosa a la derecha o hacer mas cosas especificas pues creo un css y si utilizo felxbox margenes o lo que yo quiera, tengo que tener en cuenta que esto me da un componente ya estilizado pero el lugar de acodo lo pongo de todos estsos elementos los pongo yo con un flex box o lo que yo quiera

function App() {
  return (
    <Container  component="section" maxWidth="sm">{/*este Container de mui recibe un tipo de componente para igualarlo  y tambien maxwidth entre otros */}
     
      <Typography variant='h3'  align='center' component="h1" >Formulario Registro</Typography>{/** Para los h1 y demas se utiliza el componente typography de mui, para usarlo hay que importarlo aqui en este codigo con el import y ademas hay poner l link del cdn en el index del proyecto */}
      <FormSignUp/>

    </Container>
  );
}

export default App;


import './App.css';



//mis import
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FormSignUp from './components/FormSignUp';


//➡️ este proyecto busca explicar y dar un ejemplo de las diferencias de un componente de clase y un componente funcional, los ejemplos estan en los archivos ClassComponent y FuncComponent, si los quiero ver en en accion los llamo en el App.js y listo, solo para ver ejemplo corriendo
//ademas se utiliza Material UI en este proyecto , este es el comando para instalar esa libreria  npm install @mui/material @emotion/react @emotion/styled   en esta misma url estan los componentes de donde voy a sacar el codigo  https://mui.com/material-ui/getting-started/installation/




function App() {
  return (
    <div>
     
      <FormSignUp/>

    </div>
  );
}

export default App;

import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import Banner from "./Banner"
import Form from "./Form"




const App = () => (
  <>
<Banner/>
<Form />


</>
)

export default App;












//Reglas

//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento padre
//3:Apoyarse de los Fragment cuando necesito devolver 2 elementos
//4:Fragment => <> hijos </>
//5: img siempre se cierra
//6: classNameNameName => classNameNameNameName
//7: for => htmlFor
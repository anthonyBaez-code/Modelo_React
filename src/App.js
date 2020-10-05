import React from 'react';
import "./styles/styles.scss"
// import Curso from "./Curso"
import Banner from "./Banner"
import Form from "./Form"
import CourseGrid from './CourseGrid'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./Course"
import MainMenu from './MainMenu';
import History from "./History"



const App = () => (
  <Router>
    <MainMenu />
    <Switch>
    <Route path="/" exact component= {Banner} />
    <Route path="/cursos/:id"  component={ Course}/>
    <Route path="/cursos"  component= {CourseGrid} />
    <Route path="/history"  component={ History}/>
    <Route path="/form" component={ () => <Form name = " Página de contacto"/>} />
    <Route component={() =>(
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
   )}/>
    </Switch>
  </Router>
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
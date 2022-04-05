
import React from 'react';
import NavBar from './componentes/NavBar';
import {ItemListContainer} from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Cart } from './componentes/Cart';

const App = () => {
  const name = 'Mauro';
  const lastname = 'Robledo';
  const links = [
    {name:'Fútbol', route:"categorias/futbol", id:1}, 
    {name:'Básquet', route:"categorias/basquet", id:2},
    {name:'Fórmula 1', route:"categorias/formula1", id:3},
]
  // const objetosArray = [{nombre: 'Argentina', precio:10000}, {nombre: 'Argentina alternativa', precio:11500}, {nombre:'Real Madrid', precio:9000}]
  return (  
    <BrowserRouter>
      <NavBar listaLinks={links} />
      <Routes>
        <Route path="/" element= {<ItemListContainer nombre={name} apellido={lastname}/>}/>
        <Route path="/categorias/:name" element= {<ItemListContainer nombre={name} apellido={lastname}/>}/>
        <Route path="/producto/:id" element= {<ItemDetailContainer/>}/>
        <Route path="/cart" element= {<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
  }
export default App;
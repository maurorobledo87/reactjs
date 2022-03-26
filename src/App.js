
import React from 'react';
import NavBar from './componentes/NavBar';
import {CartWidget} from './componentes/CartWidget';
import {ItemListContainer} from './componentes/ItemListContainer';

const App = () => {
  const name = 'Mauro';
  const lastname = 'Robledo';
  const links = ['Futbol', 'Basquet', 'Formula 1']
  // const objetosArray = [{nombre: 'Argentina', precio:10000}, {nombre: 'Argentina alternativa', precio:11500}, {nombre:'Real Madrid', precio:9000}]
  return (  
    <>
      <NavBar listaLinks={links} >
        <CartWidget/>
      </NavBar>
      <ItemListContainer nombre={name} apellido={lastname} ></ItemListContainer>
      
    </>
  );
  }
export default App;
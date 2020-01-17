import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevIten from './components/DevItem';
import DevForm from './components/DevForm';

//Componente - Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado - Informações mantidas pelo componente (Lembrar imutabilidade)
//Proprieadade - Informações que um componente pai passa para o componente filho
//programação imperativa
//dev.techs é um array de strings logo ele precisa ser concatenada com join

function App() {
  const [devs, setDevs] = useState([]); //devs inicia com um array vazio e vai guardando e mostrando

  useEffect(() =>{
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) { 

    const response = await api.post('/devs', data);

    // adicionar um novo dev toda vez que ele for cadastrado
    // ...devs == copia todos os devs que já estão cadastrados
    // e pega a nova resposta recebida e adiciona nesse novo array copiado
    setDevs([...devs, response.data]);
  }
    //onSubmit está passando uma função para o DevForm, isso é possível
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => ( //key={dev._id} todo item da lista percorrida deve conter um identificador único
            <DevIten key={dev._id} dev={dev} />
          ))}
        </ul>  
      </main>
    </div>
  );
}

export default App;

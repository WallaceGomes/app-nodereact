import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente - Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado - Informações mantidas pelo componente (Lembrar imutabilidade)
//Proprieadade - Informações que um componente pai passa para o componente filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <li className="dev-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/43701494?s=400&v=4" alt="Wallace Gomes"/>
                <div className="user-info">
                    <strong>Wallace Gomes</strong>
                    <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Desenvolvedor JR</p>
            <a href="https://github.com/WallaceGomes">Acessar Perfil no Github</a>
        </li>
        <li className="dev-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/43701494?s=400&v=4" alt="Wallace Gomes"/>
                <div className="user-info">
                    <strong>Wallace Gomes</strong>
                    <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Desenvolvedor JR</p>
            <a href="https://github.com/WallaceGomes">Acessar Perfil no Github</a>
        </li>
        <li className="dev-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/43701494?s=400&v=4" alt="Wallace Gomes"/>
                <div className="user-info">
                    <strong>Wallace Gomes</strong>
                    <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Desenvolvedor JR</p>
            <a href="https://github.com/WallaceGomes">Acessar Perfil no Github</a>
        </li>
        <li className="dev-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/43701494?s=400&v=4" alt="Wallace Gomes"/>
                <div className="user-info">
                    <strong>Wallace Gomes</strong>
                    <span>ReactJS, React Native, Node.js</span>
                </div>
            </header>
            <p>Desenvolvedor JR</p>
            <a href="https://github.com/WallaceGomes">Acessar Perfil no Github</a>
        </li>
      </main>
    </div>
  );
}

export default App;

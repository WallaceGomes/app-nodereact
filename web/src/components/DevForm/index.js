import React, { useState, useEffect } from 'react';

import './styles.css'

function DevForm({ onSubmit }) {

    const [github_username, setGithubusername] = useState('');
    const [techs, setTechs] = useState('');
  
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
    }, []);

    async function handleSubmit(e) {
        //e stands for event
        //o comportamento padrão de um envio de formulário é ir para outra página
        // "preventDefault" evita esse comportamento
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        //resetar campos do formulário
        setGithubusername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubusername(e.target.value)}
              //e = event // forma do react de armazenar um valor de um input dentro do valor de um estado
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              //e = event // forma do react de armazenar um valor de um input dentro do valor de um estado
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                //e = event // forma do react de armazenar um valor de um input dentro do valor de um estado
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                //e = event // forma do react de armazenar um valor de um input dentro do valor de um estado
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;
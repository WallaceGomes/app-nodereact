import React from 'react';

import './styles.css'

/*function DevIten(props) {
    const { dev } = props;*/
// é a mesma coisa ^^^^^^
function DevIten({ dev }) {
    return (
        <li className="dev-iten"> 
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span> 
                </div>
            </header>
            <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
        </li>
    );
}

export default DevIten;

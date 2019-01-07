'use strict'

import React from 'react'

const App = () => (
    <div className='app'>
        <div className='search'>
            <input type='search' placeholder='Digite o nome do Usuario do Github'/>
        </div>
        <div className='user-info'>
            <img src='https://avatars2.githubusercontent.com/u/32188335?s=460&v=4'></img>
            <h1>Caio Massayuki
                <a href='https://github.com/CaioMassayuki'></a>
            </h1>
            <ul className='repos-info'>
                <li>- Repositórios: 6</li>
                <li>- Seguidores: 4</li>
                <li>- Seguindo: 0</li>
            </ul>
            <div className='actions'>
                <button> Ver Repositórios </button>
                <button> Ver Favoritos </button>
            </div>

            <div className='repos'>
                <h2> Repositórios: </h2>
                <ul>
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>

            <div className='starred'>
            <h2> Favoritos: </h2>
                <ul>
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default App
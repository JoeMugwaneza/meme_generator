import React from 'react';

export default function Header(){
    return(
        <header className='meme-header'>
            <img src={require("../images/troll-face.png")} className="troll-face" alt='troll-face'/>
            <h2 className='meme--title'>Meme Generator</h2>
            <h4 className='meme--project-name'>React Course  - Project 3</h4>
        </header>
    )
}
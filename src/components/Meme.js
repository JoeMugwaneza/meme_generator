import React from 'react';
import memesData from '../memesData';

export default function Meme(){
    function getMemeImage(){
        const image = memesData.data.memes.map(meme => meme.url)
        console.log(image);
    }

    return(
        <main>
            <div className='meme--form'>
                <input type="text" placeholder='Top text' className='form--input'/>
                <input type="text" placeholder='Bottom text' className='form--input'/>
                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
                
            </div>
        </main>
        
    )
}
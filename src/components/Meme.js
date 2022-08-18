import React from 'react';
import memesData from '../memesData';

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage(){
        const images = memesData.data.memes.map(meme => meme.url)
        const randomImageUrl = Math.floor(Math.random()*images.length);
        const url = images[randomImageUrl]; 

        setMeme(prevMeme => ({ 
            ...prevMeme, 
            randomImage: url
        }))

        setMemeImage(images[randomImageUrl])

    }

    return(
        <main>
            <div className='meme--form'>
                <input type="text" placeholder='Top text' className='form--input'/>
                <input type="text" placeholder='Bottom text' className='form--input'/>
                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
        
    )
}
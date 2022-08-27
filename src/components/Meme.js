import React from 'react';
// import memesData from '../memesData';

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event){
        const {name, value, type} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    },[])

    const [allMemes, setAllMemes] = React.useState([]);

    function getMemeImage(){
        const memes = allMemes.data.memes.map(meme => meme.url)
        const randomImageUrl = Math.floor(Math.random()*memes.length);
        const url = memes[randomImageUrl]; 

        setMeme(prevMeme => ({ 
            ...prevMeme, 
            randomImage: url
        }))

        setMemeImage(memes[randomImageUrl])

    }
    

    return(
        <main>
            <div className='meme--form'>

                <input 
                    type="text" 
                    placeholder='Top text' 
                    className='form--input'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder='Bottom text'
                    className='form--input'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    onClick={getMemeImage} 
                    className='form--button'>
                    Get a new meme image 🖼
                </button>

            </div>

            <div className='meme'>
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
        
    )
}
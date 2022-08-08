import React, { useState, useEffect } from 'react'
import './Main.css'


function Main() {

    const [catImage, setCatImage] = useState(' ')

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const realData = await fetch(
            'https://api.thecatapi.com/v1/images/search')
            .then((data) => data.json())

        setCatImage(realData[0].url)
    }

    return (
        <div className='container'>
            <div className='principal-wrapper'>
                <h1>Clique e veja um Lindo Gatinho :D</h1>
                <button onClick={getData} className='button-show'>^--^</button>
                <div className='image-wrapper'>
                    <img className='image' src={catImage} alt='Uma imagem de um gato' />
                </div>
            </div>
        </div>
    )
}

export default Main
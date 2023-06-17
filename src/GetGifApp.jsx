import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavBar, GridGif } from '.';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { SavedGifs } from './components/SavedGifs';
import { GifViewer } from './components/GifViewer';
import { useGifHandling } from './hooks/useGifHandling';
import InitMessage from './components/InitMessage';

export const GetGifApp = () => {
    const [isInit, setIsInit] = useState(false);
    const [categories, setCategory] = useState([]);
    const [numberItems, setNumberItems] = useState(parseInt(localStorage.getItem('numberItems')) || 10);
    const [image, setImage] = useState({});
    const [theme, setNewTheme] = useThemeSwitcher();
    const [gifsJSON, setGif] = useGifHandling();

    const onAddCategory = (value) => {
        if( categories.includes(value) ) return;
        setCategory([value, ...categories]);
    }

    // useEffect(() => {
    //     console.log(gifsJSON)
    // }, [gifsJSON]);

    return (
        <div className = { `theme-${ theme }` }>
            <GifViewer image = { image } />
            {/* Navigation bar */}
            <NavBar 
                    setInitApp = { setIsInit }
                    onNewCategory = { onAddCategory } 
                    numberItems = { numberItems }
                    setNumberItems = { setNumberItems }
                    setNewTheme = { setNewTheme } />

            {/* Wanted gifs */}
            <ol>
                {
                    isInit ? '': <InitMessage/>
                }
                { 
                    categories.map( category => <GridGif 
                                                        key = { category } 
                                                        category = { category } 
                                                        numberItems = { numberItems }
                                                        setImage = { setImage }
                                                        setGif = { setGif } />)
                }
            </ol>

            {/* Saved gifs */}
            <SavedGifs setNewTheme = { setNewTheme } gifsJSON = { gifsJSON } setImageFunction = { setImage } setGif = { setGif }/>

        </div>
    );
};
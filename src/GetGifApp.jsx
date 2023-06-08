import React from 'react';
import { useState } from 'react';
import { NavBar, GridGif } from '.';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { SavedGifs } from './components/SavedGifs';
import { GifViewer } from './components/GifViewer';

export const GetGifApp = () => {
    const [categories, setCategory] = useState([]);
    const [numberItems, setNumberItems] = useState(parseInt(localStorage.getItem('numberItems')) || 10);
    const [theme, setNewTheme] = useThemeSwitcher();
    const [image, setImage] = useState({});

    const onAddCategory = (value) => {
        if( categories.includes(value) ) return;
        setCategory([value, ...categories]);
    }

    return (
        <div className = { `theme-${ theme }` }>
            <GifViewer image = { image } />
            {/* Navigation bar */}
            <NavBar 
                    onNewCategory = { onAddCategory } 
                    numberItems = { numberItems }
                    setNumberItems = { setNumberItems }
                    setNewTheme = { setNewTheme } />

            {/* Wanted gifs */}
            <ol>
                { 
                    categories.map( category => <GridGif 
                                                        key = { category } 
                                                        category = { category } 
                                                        numberItems = { numberItems }
                                                        setImage = { setImage } />)
                }
            </ol>

            {/* Saved gifs */}
            <SavedGifs />

        </div>
    );
};
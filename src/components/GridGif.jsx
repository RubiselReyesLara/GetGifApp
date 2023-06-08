import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GridGif = ({ category, numberItems, theme, setImage }) => {
    console.log(theme)

    const { images, isLoading } = useFetchGifs( category, numberItems );

    return (
        <>
            <h3>{ '"' + category[0].toUpperCase() + category.substring(1, category.length) + '", ' }</h3>
            
            {
                // isLoading && ( <h2>Loading...</h2> )
                isLoading ? ( <h3>Loading...</h3> ) : <h3> { images.length } results found</h3>
            }

            <div className='card-grid'>
            { images.map( image => {
                return (
                    <GifItem key = { image.id } setImage = { setImage } { ...image }  />
                );
            }) }
            </div>

        </>
    );
}
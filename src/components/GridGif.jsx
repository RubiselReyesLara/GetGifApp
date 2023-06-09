import React, { useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export const GridGif = ({ category, numberItems, theme, setImage, setGifHandling }) => {
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
                    <GifItem key = { image.id } setImage = { setImage } { ...image } firstButtonFunction = { () => setGifHandling( image ) } fbf_Icon = { faFloppyDisk } />
                );
            }) }
            </div>

        </>
    );
}
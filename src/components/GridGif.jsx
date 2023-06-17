import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";  

export const GridGif = ({ category, numberItems, setImage, setGif }) => {
    const { images, isLoading } = useFetchGifs( category, numberItems );

    const saveGifLocalStorage = (image) => {
        setGif( image );
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Gif saved successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }   

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
                    <GifItem key = { image.id } setImage = { setImage } { ...image } firstButtonFunction = { () => saveGifLocalStorage(image) } fbf_Icon = { faFloppyDisk } />
                );
            }) }
            </div>

        </>
    );
}
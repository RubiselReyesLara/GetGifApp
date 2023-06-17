import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcher } from './ThemeSwitcher';
import { GifItem } from './GifItem';
import Swal from "sweetalert2";  



export const SavedGifs = ({ setNewTheme, gifsJSON, setImageFunction, setGif }) => {
    const entries = Object.entries( gifsJSON || {} );

    const deleteGifLocalStorage = (image) => {
        Swal.fire({
            title: `Delete the gif "${ image.title }"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Course'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Gif deleted successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setGif( image );
                }
            });
    }

    const hideSavedGifs = () => {
        const divSavedGifs = document.getElementsByClassName('div-saved-gifs')[0];
        const divGifs = document.getElementsByClassName('div-gifs')[0];

        divSavedGifs.style.visibility = 'hidden';
        divSavedGifs.style.backgroundColor = 'rgba(0,0,0,0)';

        divGifs.style.right = '-100vh';
    }   

    return (
    <div className="div-saved-gifs">
        <div className="div-gifs">
            <div className="header-div-gifs">
                <button className="btn-back" onClick = { hideSavedGifs } ><FontAwesomeIcon icon = { faArrowLeft } /></button>
                <ThemeSwitcher setNewTheme = { setNewTheme }/>
                <p>Local gifs saved</p>
            </div>
            <div className='body-div-gifs'>
                { 
                    entries.map((gif) => {
                        return (<GifItem key = { gif[1].id } setImage = { setImageFunction } title = { gif[1].title } url = { gif[1].url } firstButtonFunction = { () => { deleteGifLocalStorage(gif[1]) }} fbf_Icon = { faTrash } />);
                    }) 
                }
            </div>
        </div>
    </div>);
}
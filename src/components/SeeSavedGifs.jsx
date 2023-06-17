import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const SeeSavedGifs = () => {

    const seeSavedGifs = () => {
        const divSavedGifs = document.getElementsByClassName('div-saved-gifs')[0];
        const divGifs = document.getElementsByClassName('div-gifs')[0];

        divSavedGifs.style.visibility = 'visible';
        divSavedGifs.style.backgroundColor = 'rgba(0,0,0,0.5)';

        divGifs.style.right = '0';
    }   

    return (
    <button id='seeSavedGifs' onClick = { seeSavedGifs }>
        <FontAwesomeIcon icon = { faBars } />
    </button>
    );
}
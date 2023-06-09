import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcher } from './ThemeSwitcher';

export const SavedGifs = ({ setNewTheme, gifs }) => {

    useEffect(() => {
        
    }, [ gifs ]);

    return (
    <div className="div-saved-gifs">
        <div className="div-gifs">
            <div className="header-div-gifs">
                <button className="btn-back"><FontAwesomeIcon icon = { faArrowLeft } /></button>
                <ThemeSwitcher setNewTheme = { setNewTheme }/>
            </div>
            <div className='body-div-gifs'>
                hola
            </div>
        </div>
    </div>);
}
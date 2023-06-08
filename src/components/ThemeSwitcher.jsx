import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun } from '@fortawesome/free-solid-svg-icons';

export const ThemeSwitcher = ({ setNewTheme }) => {
    return <button id='themeSun' onClick = { setNewTheme }>
            <FontAwesomeIcon icon = { faSun } />
           </button>;
}
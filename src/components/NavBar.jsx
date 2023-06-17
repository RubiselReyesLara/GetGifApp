import { AddCategory, NumberItemsSelect } from "../index";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SeeSavedGifs }from "./SeeSavedGifs";

const goToGH = () => {
    window.open('https://github.com/RubiselReyesLara', '_blank');
}

export const NavBar = ({ setInitApp, onNewCategory, numberItems, setNumberItems, setNewTheme }) => {

    return (
        <nav className="navBar">
            <div className="app-title" onClick = { goToGH }>
                <h1>Get <span>Gif</span> App</h1>
            </div>
            <div className="input-category">
                <AddCategory setInitApp = { setInitApp } onNewCategory = { value => onNewCategory(value) } numberItems = { numberItems }/>
                <NumberItemsSelect setNumberItems = { setNumberItems }/>
            </div>
            <div className="options">
                <ThemeSwitcher setNewTheme = { setNewTheme } />
                <SeeSavedGifs />
            </div>
        </nav>
    );
}
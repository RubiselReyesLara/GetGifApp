import { useState, useEffect } from "react";

export const useThemeSwitcher = () => {
    const navigatorTheme = localStorage.getItem('theme'); // get the stored theme

    const currentSystemTheme = () => { // get current system theme dark or light
        return ((window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light');
    }

    const [theme, setTheme] = useState(navigatorTheme != null ? navigatorTheme : currentSystemTheme());

    useEffect(() => {  
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setNewTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return [theme, setNewTheme];
}
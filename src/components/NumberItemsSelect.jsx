import { useEffect } from "react";

export const NumberItemsSelect = ({ setNumberItems }) => {
    const value = parseInt(localStorage.getItem('numberItems')) || 10;

    useEffect(() => {
        setNumberItems(value);
    }, []);

    const onChange = event => {
        localStorage.setItem('numberItems', parseInt(event.target.value));
        setNumberItems(parseInt(event.target.value));
    }

    return (
        <select defaultValue = { value } onChange = { event => onChange(event) } >
            <option value = { 10 }>10</option>
            <option value = { 20 }>20</option>
            <option value = { 30 }>30</option>
        </select>
    );
}
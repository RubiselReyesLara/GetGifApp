import React from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setInitApp, onNewCategory, numberItems}) => {
    const [ inputValue, setInputValue ] = React.useState('');
 
    const onChange = (value) => {
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 0 ) return;
        setInitApp(true);
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }


    return (
        <form name="form" onSubmit={ (event) => { onSubmit(event) } } aria-label="form">
            <input 
                type="text" 
                placeholder={ "Search gifs" }
                value= { inputValue }
                onChange={ (event) => onChange(event.target.value) } 
            />
        </form>
    );
}

AddCategory.propTypes = {
    setInitApp: PropTypes.func.isRequired,
}
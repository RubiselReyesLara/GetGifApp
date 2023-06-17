import React from 'react'   

export const AddCategory = ({setInitApp, onNewCategory, numberItems}) => {
    const [ inputValue, setInputValue ] = React.useState('');
 
    const onChange = (value) => {
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 0 ) return;
        onNewCategory( inputValue.trim() )
        setInputValue('');
        setInitApp(true);
    }


    return (
        <form onSubmit={ (event) => { onSubmit(event) } }>
            <input 
                type="text" 
                placeholder={ "Search gifs" }
                value= { inputValue }
                onChange={ (event) => onChange(event.target.value) } 
            />
        </form>
    );
}
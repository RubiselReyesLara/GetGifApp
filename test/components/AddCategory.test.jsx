import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en addcategory', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory setInitApp={ () => {} }/> );

        const input = screen.getByRole('textbox');// referencia al input

        fireEvent.input( input, { target: { value:'Saitama' } } );

        expect(input.value).toBe('Saitama');
    });

    test('Debe simular el submit de un evento y mostrarlo o no segun el dato que se envia', () => {

        const setInitApp = jest.fn();

        render( <AddCategory setInitApp={ setInitApp }/> );

        const input = screen.getByRole('textbox');// referencia al input
        const form = screen.getByRole('form');// referencia al form
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        fireEvent.submit( form )

        expect( setInitApp ).toHaveBeenCalled();
        expect( setInitApp ).toHaveBeenCalledTimes(1);
        expect( setInitApp ).toHaveBeenCalledWith(true);
    });

    test('No debe de llamar el setInitApp si el input es vacío', () => { 
        const setInitApp = jest.fn();

        render( <AddCategory setInitApp={ setInitApp }/> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: '' } });
        fireEvent.submit( form );

        expect( setInitApp ).toHaveBeenCalledTimes(0);


     });

}); 
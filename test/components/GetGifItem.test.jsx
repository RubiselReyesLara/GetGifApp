import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
    const title = 'Oppenheimer';
    const url = 'https://google.com';

    test('Debe hacer match con snapshot', () => { 
        const { container } = render(<GifItem title = { title } url = { url } />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar imagen con el url y el alt indicado ', () => { 
        render(<GifItem title = { title } url = { url } />);
        expect(screen.getByRole('img').src).toBe(url + '/');
        expect(screen.getByRole('img').alt).toBe(title);
    });

    test('Debe mostrar el titulo del componente ', () => { 
        render(<GifItem title = { title } url = { url } />);
        expect(screen.getByText(title)).toBeTruthy();;
    });
});
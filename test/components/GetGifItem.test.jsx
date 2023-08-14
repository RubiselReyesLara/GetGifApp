import {render} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebasen GifItem', () => {
    test('Debe hacer match con snapshot', () => { 
        render(<GifItem />);
     })
});
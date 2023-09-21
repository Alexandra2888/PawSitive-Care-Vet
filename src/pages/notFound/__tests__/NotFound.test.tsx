import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import {NotFound} from '../../notFound';


describe('test NotFound component', () => {
it('test if NotFound page is rendered', () => {
render(<BrowserRouter>
    <NotFound />
  </BrowserRouter>);
})
})
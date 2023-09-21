import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Appointments from '../Appointments';


describe('test Appointments page', () => {
it('test if Appointments page is rendered', () => {
render(<BrowserRouter>
    <Appointments />
  </BrowserRouter>);
})
})
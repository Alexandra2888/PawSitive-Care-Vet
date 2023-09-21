import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import { AddAppointments } from '../../addAppointments';


describe('test AddAppointements page', () => {
it('test if AddAppointments page is rendered', () => {
render(<BrowserRouter>
    <AddAppointments />
  </BrowserRouter>);
})
})
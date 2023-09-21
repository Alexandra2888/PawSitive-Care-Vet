import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {ForgotPassword} from '../../forgotpassword';
import { BrowserRouter } from 'react-router-dom'; 


describe('test ForgotPassword page', () => {
it('test if ForgotPassword page is rendered', () => {
render(<BrowserRouter>
    <ForgotPassword />
  </BrowserRouter>);
})
})
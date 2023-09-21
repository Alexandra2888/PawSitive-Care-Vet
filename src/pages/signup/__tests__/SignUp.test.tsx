import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import {SignUp} from "../../signup";
import { UserAuthContextProvider } from '../../../../contexts/UserAuthContext';

describe('test SignUp component', () => {
it('test if SignUp component is rendered', () => {
render(
  <BrowserRouter>
  <UserAuthContextProvider>
    <SignUp />
  </UserAuthContextProvider>
</BrowserRouter>
);
})
})
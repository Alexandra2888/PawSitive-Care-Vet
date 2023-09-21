import React from 'react'; // Import React
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {BigNavbar} from '../../../navbar/bigNavbar';
import { UserAuthContextProvider } from '../../../../../contexts/UserAuthContext';
import { AppProvider } from '../../../../../contexts/DarkModeContext';

describe('test Footer', () => {
  it('test if Footer component is rendered', () => {
    render(
        <BrowserRouter>
        <AppProvider>
        <UserAuthContextProvider>
          <BigNavbar />
        </UserAuthContextProvider>
        </AppProvider>
      </BrowserRouter>
    );
  });
});

import React from 'react'; // Import React
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../../UI/footer'; 

describe('test Footer', () => {
  it('test if Footer component is rendered', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});

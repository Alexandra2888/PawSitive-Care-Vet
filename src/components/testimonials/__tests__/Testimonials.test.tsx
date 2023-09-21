import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Testimonials} from '../../testimonials';


describe('test Testimonials component', () => {
it('test if Testimonials component is rendered', () => {
render(
    <Testimonials />
);
})
})
import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Services} from '../../services';


describe('test Services component', () => {
it('test if Services component is rendered', () => {
render(
    <Services />
);
})
})
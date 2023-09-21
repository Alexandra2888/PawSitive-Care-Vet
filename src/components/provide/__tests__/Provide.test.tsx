import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Provide} from '../../provide';


describe('test Provide component', () => {
it('test if Provide component is rendered', () => {
render(
    <Provide />
 );
})
})
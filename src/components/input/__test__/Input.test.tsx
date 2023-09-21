import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Input} from '../../input';
import { ChangeEvent } from 'react';


describe('test Provide component', () => {
it('test if Provide component is rendered', () => {
render(<Input type={''} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
} }/>);
})
})
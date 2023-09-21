import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Button} from '../../button';


describe('test Button component', () => {
it('test if Button component is rendered', () => {
render(<Button type={''} children={undefined}/>);
})
})
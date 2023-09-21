import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Specialists} from '../../specialists';


describe('test Specialists component', () => {
it('test if Specialists component is rendered', () => {
render(
    <Specialists />
  );
})
})
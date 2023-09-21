import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Banner} from '../../components/banner';


describe('test Banner component', () => {
it('test if Banner component is rendered', () => {
render(
    <Banner />
 );
})
})
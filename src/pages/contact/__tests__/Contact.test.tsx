import { describe, it } from 'vitest';
import { render} from '@testing-library/react';
import {Contact} from "../../contact";

describe('test Contact page', () => {
it('test if Contact page is rendered', () => {
render(<Contact/>);
})
})
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../../Contact';

afterEach(cleanup);

describe('Contact is rendering', () => {

    it('renders', () => {
      render(<ContactForm />);
    });
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm />)
      expect(asFragment()).toMatchSnapshot()
    });
});

describe('button is visable', () => {
    it('inserts text into the button', () => {
        const {getByTestId } = render(<ContactForm/>)
        expect(getByTestId('button')).toHaveTextContent('Submit');
    });
});
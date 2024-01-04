
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Hello from "../hello";


test('Should render hello component', () => {
    render(<Hello/>);
    const helloComponent = screen.getByTestId("hello");
    expect(helloComponent).toBeInTheDocument();
    expect(helloComponent).toHaveTextContent("Hello, World!");
  });
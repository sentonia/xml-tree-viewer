// App.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe, expect, it, vi } from 'vitest';

vi.mock('xml-js', () => ({
  xml2js: vi.fn(() => ({ example: 'json' })),
}));

describe('App Component', () => {
  it('should render the initial state correctly', () => {
    render(<App />);
    expect(screen.getByText(/XML Tree-tment/)).toBeInTheDocument();
    expect(screen.getByText(/Upload XML File/)).toBeInTheDocument();
    expect(screen.getByText(/Clear XML/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear XML/ })).toBeDisabled();
  });
});

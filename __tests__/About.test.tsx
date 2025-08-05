
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '@/components/About/About';

/**
 * Test to ensure the About component renders correctly.
 */
test('Renders the About component', () => {
  render(<About />);
  expect(screen.getByTestId("aboutMe")).toBeDefined();
});
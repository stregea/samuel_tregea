import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '@/components/Experience/Experience';

/**
 * Test to ensure the Experience component renders correctly.
 */
test('Renders the Experience component', () => {
  render(<Experience />);
  expect(screen.getByTestId("experience")).toBeDefined();
});
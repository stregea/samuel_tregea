import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Whoami from '@/components/Whoami/Whoami';

/**
 * Test to ensure the Whoami component renders correctly.
 */
test('renders Whoami heading', () => {
  render(<Whoami />);
  // Adjust the query below to match the actual heading/text in Whoami
  expect(screen.getByTestId('whoami')).toBeDefined();
});

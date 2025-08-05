import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Whoami from '@/components/Whoami/Whoami';
  
/**
 * Test to ensure the Whoami component renders correctly.
 */
test('Renders the Whoami component', () => {
  render(<Whoami />);
  expect(screen.getByTestId("whoami")).toBeDefined();
});
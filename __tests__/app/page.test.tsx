import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

test('Renders the Home component', () => {
  render(<Home />);

  expect(screen.getByTestId("whoami")).toBeDefined();
  expect(screen.getByTestId("aboutMe")).toBeDefined();
  expect(screen.getByTestId("experience")).toBeDefined();
});

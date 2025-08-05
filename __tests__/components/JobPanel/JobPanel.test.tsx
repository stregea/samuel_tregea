import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JobPanel from '@/components/JobPanel/JobPanel';


test('Renders the JobPanel component', () => {
  render(<JobPanel />);

  // Verify the tabs are rendered.
  expect(screen.getByTestId("jobTabs")).toBeDefined();

  // Verify a job description is rendered.
  expect(screen.getByTestId("job-description-0")).toBeDefined();
});

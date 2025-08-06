import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JobDescription from '@/components/JobPanel/JobDescription/JobDescription';

/**
 * Test to ensure the JobDescription component renders correctly.
 */
test('Renders the JobDescription component', () => {
    const job = {
        title: "Software Engineer",
        company: "My Company",
        location: "Rochester, NY",
        duration: "Jan 2025 - Aug 2025",
        description: ["This is a job description."]
    };
    const selectedTabIndex = 0;
    const currentTabIndex = 0;

    render(<JobDescription selectedTabIndex={selectedTabIndex} currentTabIndex={currentTabIndex} job={job} />);
    expect(screen.getByTestId(`job-description-${currentTabIndex}`)).toBeDefined();
});

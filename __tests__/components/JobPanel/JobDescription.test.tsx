import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JobDescription from '@/components/JobPanel/JobDescription/JobDescription';

/**
 * Test to ensure the JobDescription component renders correctly.
 */
test('Renders the JobDescription component', () => {
    const job = {
        title: "Software Engineer",
        company: "Tech Company",
        location: "Remote",
        duration: "January 2020 - Present",
        description: ["This is a job description."]
    };
    const selectedTabIndex = 0;
    const currentTabIndex = 0;

    render(<JobDescription selectedTabIndex={selectedTabIndex} currentTabIndex={currentTabIndex} job={job} />);
    expect(screen.getByTestId(`job-description-${currentTabIndex}`)).toBeDefined();
});

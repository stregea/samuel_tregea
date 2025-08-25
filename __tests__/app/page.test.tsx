import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from '@/app/page';

/**
 * Test to ensure the Home component renders correctly.
 */
test('Renders the Home component', () => {
    render(<Home/>);

    expect(screen.getByTestId("navbar")).toBeDefined();
    expect(screen.getByTestId("whoami")).toBeDefined();
    expect(screen.getByTestId("aboutMe")).toBeDefined();
    expect(screen.getByTestId("experience")).toBeDefined();
    expect(screen.getByTestId("projects")).toBeDefined();
    expect(screen.getByTestId("copyright")).toBeDefined();
});
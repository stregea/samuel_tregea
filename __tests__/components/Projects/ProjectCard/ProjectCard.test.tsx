import {describe, test, expect, afterEach} from "vitest";
import {screen, render, cleanup} from "@testing-library/react";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";

/**
 * Test suite for the ProjectCard component.
 *
 * This suite tests the functionality of the ProjectCard component, specifically
 * ensuring that it correctly observes elements and sets their visibility.
 */
describe("ProjectCard", () => {

    afterEach(() => {
        cleanup();
    });

    /**
     * Validate the main components of the ProjectCard rendering.
     *
     * @param project The project data to validate.
     */
    const validateProjectCard = (project: {
        title: string,
        description: string,
        sourceCode?: string,
        videoDemo?: string,
        documentation?: string,
        languages: string[],
        category: string
    }) => {
        const card = screen.getByTestId("project-card");
        const cardHeader = screen.getByTestId("project-header");
        const description = screen.getByTestId("project-description");
        const iconContainer = screen.getByTestId("project-icons");
        const chip = screen.getByTestId("project-chip");

        expect(card).toBeDefined();

        expect(cardHeader).toBeDefined();
        expect(cardHeader.innerHTML).toContain(project.title);
        expect(cardHeader.innerHTML).toContain(project.languages[0]);

        expect(description).toBeDefined();
        expect(description.innerHTML).toBe(project.description);

        expect(iconContainer).toBeDefined();

        expect(chip).toBeDefined();
        expect(chip.innerHTML).toContain(project.category);
    };

    /**
     * Test the rendering of the project card with no icons.
     */
    test("should render project card correctly with no icons", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "languages": ["JavaScript"],
            "category": "Test"
        };

        render(<ProjectCard project={project}/>)

        validateProjectCard(project);
    });

    /**
     * Test the rendering of the project card with only the GitHub icon available.
     */
    test("should render the project card with only the GitHub icon available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "sourceCode": "https://github.com/stregea",
            "languages": ["Python"],
            "category": "Personal"
        };

        render(<ProjectCard project={project}/>)

        const githubIcon = screen.getByTestId("github-icon");

        validateProjectCard(project);

        expect(githubIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with only the YouTube icon available.
     */
    test("should render the project card with only the YouTube icon available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "videoDemo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "languages": ["Java"],
            "category": "Test"
        };

        render(<ProjectCard project={project}/>)

        const youtubeIcon = screen.getByTestId("youtube-icon");

        validateProjectCard(project);

        expect(youtubeIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with only the Document icon available.
     */
    test("should render the project card with only the Document icon available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "documentation": "test_documentation_url",
            "languages": ["Angular"],
            "category": "Test"
        };

        render(<ProjectCard project={project}/>)

        const documentIcon = screen.getByTestId("document-icon");

        validateProjectCard(project);

        expect(documentIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with only the GitHub and YouTube icons available.
     */
    test("should render the project card with both the GitHub and YouTube icons available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "sourceCode": "https://github.com/stregea",
            "videoDemo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "languages": ["Python"],
            "category": "Personal"
        };

        render(<ProjectCard project={project}/>)

        const githubIcon = screen.getByTestId("github-icon");
        const youtubeIcon = screen.getByTestId("youtube-icon");

        validateProjectCard(project);

        expect(githubIcon).toBeDefined();
        expect(youtubeIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with only the GitHub and Document icons available.
     */
    test("should render the project card with both the GitHub and Document icons available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "sourceCode": "https://github.com/stregea",
            "documentation": "test_documentation_url",
            "languages": ["Python"],
            "category": "Personal"
        };

        render(<ProjectCard project={project}/>)

        const githubIcon = screen.getByTestId("github-icon");
        const documentIcon = screen.getByTestId("document-icon");

        validateProjectCard(project);

        expect(githubIcon).toBeDefined();
        expect(documentIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with only the YouTube and Document icons available.
     */
    test("should render the project card with both the YouTube and Document icons available.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "videoDemo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "documentation": "test_documentation_url",
            "languages": ["Java"],
            "category": "Test"
        };

        render(<ProjectCard project={project}/>)

        const youtubeIcon = screen.getByTestId("youtube-icon");
        const documentIcon = screen.getByTestId("document-icon");

        validateProjectCard(project);

        expect(youtubeIcon).toBeDefined();
        expect(documentIcon).toBeDefined();
    });

    /**
     * Test the rendering of the project card with all of the available icons.
     */
    test("should render the project card with all available icons.", () => {
        const project = {
            "title": "Test Title",
            "description": "Test Description",
            "sourceCode": "https://github.com/stregea",
            "videoDemo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "documentation": "test_documentation_url",
            "languages": ["Python"],
            "category": "Personal"
        };

        render(<ProjectCard project={project}/>)

        const githubIcon = screen.getByTestId("github-icon");
        const youtubeIcon = screen.getByTestId("youtube-icon");
        const documentIcon = screen.getByTestId("document-icon");

        validateProjectCard(project);

        expect(githubIcon).toBeDefined();
        expect(youtubeIcon).toBeDefined();
        expect(documentIcon).toBeDefined();
    });
});
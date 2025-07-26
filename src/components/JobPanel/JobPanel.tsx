import { useState } from "react";
import Box from "@mui/material/Box";
import JobTabs from "@/components/JobPanel/JobTabs/JobTabs";
import JobDescription from "@/components/JobPanel/JobDescription/JobDescription";
import FadeIn from "@/components/utils/FadeIn/FadeIn";



/**
 * Renders the "Experience" section of the website, displaying my professional experience
 * in a tabbed interface.
 * Reference: https://mui.com/material-ui/react-tabs/#vertical-tabs
 * 
 * @component
 * @example
 * <Experience />
 *
 * @returns {JSX.Element} The rendered Experience section.
 */
export default function JobPanel() {
    const [selectedTab, setSelectedTab] = useState(0);

    const career = [
        {
            company: "Mindex",
            location: "Rochester, NY",
            title: "Software Engineer",
            duration: "January 2022 - Present",
            description: [
                "Lead development on a microservice which was leveraged in generating over $4 million in revenue through Secure Act 2.0 enhancements.",
                "Leads team in designing testing strategies for user stories in biweekly sprints, ensuring quality outcomes.",
                "Develops RESTful microservices using Java Spring for scalable, efficient system architecture.",
                "Builds responsive front-end applications for Paychex Flex® using both React and Angular frameworks.",
                "Collaborates cross-functionally with business partners to deliver innovative, secure, and architecture-aligned software solutions."
            ]
        },
        {
            company: "BCC Software",
            location: "Rochester, NY",
            title: "Software Engineer Intern",
            duration: "May 2020 - January 2021",
            description: [
                "Worked on the redesign of an industry standard website for mail tracking as well as help convert the website from VB.NET to ASP.NET MVC.",
                "Built a PDF generation tool for use within a mail tracking tool. Users can select and customize a Tableau Report and are then able to export the file as a PDF to download.",
                "Implemented new ‘Visualizations’ section for our mail tracking product. This section allows for users to view mailing information within newly developed Tableau data visualizations."
            ]
        },
        {
            company: "Precision Optical Transceivers",
            location: "Rochester, NY",
            title: "Software Engineer Intern",
            duration: "September 2019 - December 2019",
            description: [
                "Designed and implemented a new datasheet generation tool for use within the company using the Django web framework.",
                "Worked with the implementation of automatically detecting a device interface over SSH or TCP sockets.",
                "Implemented an SQLite3 database and interface for a Python application.",
                "Designed an administrative web UI and server for SQLite3 database interaction. This allowed users to view the data, sort by column, and add new data via REST calls."
            ]
        },
        {
            company: "BCC Software",
            location: "Rochester, NY",
            title: "Software Engineer Intern",
            duration: "June 2019 - August 2019",
            description: [
                "Using a JavaScript API, helped develop software that would download raw data grids from Tableau and then format the data into an Excel spreadsheet for users.",
                "Worked with developers debugging, prototyping, and coding for various tasks for projects.",
                "Presented findings to the engineering team, and effectively communicated with peers."
            ]
        },
    ];

    return (
        <Box sx={{ display: "flex", minHeight: 300 }}>
            <JobTabs career={career} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {career.map((job, idx) => (
            <JobDescription selectedTabIndex={selectedTab} currentTabIndex={idx} key={job.company + job.duration}>
                <FadeIn>
                    <h3>{job.title} - {job.company}</h3>
                    <p>{job.location} | {job.duration}</p>
                    <ul>
                        {job.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </FadeIn>
            </JobDescription>
            ))}
        </Box>
    );
};
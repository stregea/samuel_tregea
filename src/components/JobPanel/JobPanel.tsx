import { useState } from "react";
import Box from "@mui/material/Box";
import JobTabs from "@/components/JobPanel/JobTabs/JobTabs";
import JobDescription from "@/components/JobPanel/JobDescription/JobDescription";
import careerData from "@/data/career.json";

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

    return (
        <Box sx={{ display: "flex", minHeight: 300 }}>
            <JobTabs career={careerData.career} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <JobDescription
                selectedTabIndex={selectedTab}
                currentTabIndex={selectedTab}
                job={careerData.career[selectedTab]}
                key={careerData.career[selectedTab].company + careerData.career[selectedTab].duration}
            />
        </Box>
    );
};
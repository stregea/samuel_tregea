import styles from "./JobTabs.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Renders a vertical tab list for displaying career/job entries.
 * Reference: https://mui.com/material-ui/react-tabs/#vertical-tabs
 *
 * @param career - An array of job objects, each containing company, location, title, duration, and description.
 * @param selectedTab - The index of the currently selected tab.
 * @param setSelectedTab - Callback to update the selected tab index.
 * 
 * Uses Material UI's Tabs and Tab components for layout and accessibility.
 * 
 * @returns A vertical scrollable tab component for job navigation.
 */
export default function JobTabs({
    career,
    selectedTab,
    setSelectedTab,
}: {
    career: Array<{
        company: string;
        location: string;
        title: string;
        duration: string;
        description: string[];
    }>;
    selectedTab: number;
    setSelectedTab: (tab: number) => void;
}) {
    
    const isMobile = useMediaQuery("(max-width: 600px)");

    // Handle tab change event.
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant="scrollable"
            visibleScrollbar
            scrollButtons={false}
            allowScrollButtonsMobile
            value={selectedTab}
            onChange={handleChange}
            className={styles.tabGroup}
            data-testid="jobTabs"
        >
            {career.map((job, idx) => (
                <Tab
                    label={job.company}
                    id={`tab-${idx}`}
                    data-testid={`tab-${idx}`}
                    aria-controls={`tab-${idx}`}
                    key={job.company + job.duration}
                    className={styles.tab}
                />
            ))}
        </Tabs>
    );
};
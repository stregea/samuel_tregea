
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface JobDescriptionProps {
  children?: React.ReactNode;
  selectedTabIndex: number;
  currentTabIndex: number;
}

/**
 * Renders a job description panel for a specific job entry.
 * This component is used within a tabbed interface to display details of a selected job.
 * Reference: https://mui.com/material-ui/react-tabs/#vertical-tabs
 * 
 * @param props - Contains children (job description content), selectedTabIndex, and currentTabIndex.
 * 
 * @returns A panel that displays the job description when the tab is selected.
 */
export default function JobDescription(props: JobDescriptionProps) {
    // Destructure props for easier access.
    const { children, currentTabIndex, selectedTabIndex, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={currentTabIndex !== selectedTabIndex}
            id={`vertical-tabpanel-${selectedTabIndex}`}
            aria-labelledby={`vertical-tab-${selectedTabIndex}`}
            {...other}
        >
            {currentTabIndex === selectedTabIndex && (
            <Box sx={{ p: 3 }}>
                <Typography component="div">
                    {children}
                </Typography>
            </Box>
            )}
        </div>
    );
};
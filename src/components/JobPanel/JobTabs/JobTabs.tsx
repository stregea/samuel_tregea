import styles from "./JobTabs.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// https://mui.com/material-ui/react-tabs/#vertical-tabs
export default function VerticalTabs({ career, selectedTab, setSelectedTab,
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

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    const tabProperties = (index: number) => {
        return {
            id: `vertical-tab-${index}`,
            "aria-controls": `vertical-tabpanel-${index}`,
        };
    };
    
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTab}
            onChange={handleChange}
            className={styles.verticalTabs}
        >
            {career.map((job, idx) => (
                <Tab 
                    label={job.company} 
                    {...tabProperties(idx)} 
                    key={job.company + job.duration} 
                    className={styles.tab}
                />
            ))}
        </Tabs>
    );
};
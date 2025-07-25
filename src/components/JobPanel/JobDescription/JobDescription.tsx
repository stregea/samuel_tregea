import styles from "./JobDescription.module.css";
import Box from "@mui/material/Box";
import FadeIn from "@/components/utils/FadeIn/FadeIn";

export interface JobDescriptionProps {
  children?: React.ReactNode;
  selectedTabIndex: number;
  currentTabIndex: number;
  job?: {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
  };
}

/**
 * Renders a job description panel for a specific job entry.
 * This component is used within a tabbed interface to display details of a selected job.
 * Reference: https://mui.com/material-ui/react-tabs/#vertical-tabs
 * 
 * @param props - Contains children (job description content), selectedTabIndex, currentTabIndex, and job data.
 * 
 * @returns A panel that displays the job description when the tab is selected.
 */
export default function JobDescription(props: JobDescriptionProps) {
  const { selectedTabIndex, currentTabIndex, job, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={currentTabIndex !== selectedTabIndex}
      id={`vertical-tabpanel-${currentTabIndex}`}
      aria-labelledby={`vertical-tab-${currentTabIndex}`}
      {...other}
    >
      {currentTabIndex === selectedTabIndex && job && (
        <Box className={styles.description}>
            <h3>{job.title} - {job.company}</h3>
            <p>{job.location} | {job.duration}</p>
            <FadeIn>
                <ul className={styles.descriptionList}>
                {job.description.map((desc, i) => (
                    <li key={`job-desc-${i}`}>{desc}</li>
                ))}
                </ul>
          </FadeIn>
        </Box>
      )}
    </div>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface JobDescriptionProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function JobDescription(props: JobDescriptionProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

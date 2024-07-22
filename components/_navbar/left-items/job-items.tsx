import {
    Button,
    List,
    ListItem,
    ListItemButton,
    MenuItem,
} from "@mui/material";
import ListItemContent from "@mui/joy/ListItemContent";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState, MouseEvent } from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{ width: 640 }}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: 0 }}>
                    <Typography className="grid grid-cols-4">
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}
interface IJobItemsProps {
    jobTitles: string[];
    // jobItems: string[];
}

const jobItems = ["java", "php", "python", "nodejs", "javascript"];
const JobItems = (props: IJobItemsProps) => {
    const { jobTitles } = props;
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleMenuOpen = (index: number, event: MouseEvent<HTMLElement>) => {
        setValue(index);
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "#121212",
                    display: "flex",
                    height: 400,
                    color: "white",
                    maxWidth: 900,
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: "divider" }}
                >
                    {jobTitles.map((jobTitle, index) => {
                        return (
                            <Tab
                                onMouseOver={(event) =>
                                    handleMenuOpen(index, event)
                                }
                                sx={{
                                    textTransform: "none",
                                    color: "white",
                                }}
                                label={jobTitle}
                                {...a11yProps(index)}
                            />
                        );
                    })}
                </Tabs>
                <TabPanel value={value} index={0}>
                    {jobItems.map((jobItem, index) => {
                        return (
                            <Button
                                id={`${jobItem}`}
                                sx={{
                                    height: 50,
                                    justifyContent: "flex-start",
                                    color: "#a6a6a6",
                                    ":hover": {
                                        bgcolor: "primary.main", // 
                                        color: "white",
                                    },
                                }}
                            >
                                {jobItem}
                            </Button>
                        );
                    })}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </Box>
        </>
    );
};

export default JobItems;

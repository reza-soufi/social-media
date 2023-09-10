"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MessageNumber } from "../StyledComponents/MessageNumber";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", background: "#02041d" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: "#1f2245",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#4c00c5",
            },
          }}
        >
          <Tab style={{ color: "#fff" }} label="گروه ها" {...a11yProps(0)} />
          <Tab
            icon={<MessageNumber> 9 </MessageNumber>}
            iconPosition="end"
            style={{ color: "#fff" }}
            label="کانال ها"
            {...a11yProps(1)}
          />
          <Tab style={{ color: "#fff" }} label="کاربرها" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

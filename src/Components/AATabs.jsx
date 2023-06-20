import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AATabs = ({ componentArray }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered={!isSmallScreen}
            variant={isSmallScreen ? 'scrollable' : 'standard'}
            scrollButtons={isSmallScreen ? 'auto' : 'off'}
          >
            <Tab label="UseState" value="1" />
            <Tab label="UseReducer" value="2" />
            <Tab label="UseEffect" value="3" />
            <Tab label="UseRef" value="4" />
            <Tab label="UseLayoutEffect" value="5" />
            <Tab label="UseImperativeHandle" value="6" />
            <Tab label="UseContext" value="7" />
            <Tab label="UseMemo" value="8" />
            <Tab label="UseCallback" value="9" />
          </TabList>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {componentArray.map((component, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
            }}>
              <TabPanel
                value={(index + 1).toString()}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                {component}
              </TabPanel>
            </Grid>
          ))}
        </Grid>
      </TabContext>
    </Box>
  );
};

export default AATabs;

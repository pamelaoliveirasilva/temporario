import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconHomeActivated from '../../assets/IconHomeActivated.svg';
import IconHomeDisabled from '../../assets/IconHomeDisabled.svg';
import IconClientActivated from '../../assets/IconClientActivated.svg';
import IconClientDisabled from '../../assets/IconClientDisabled.svg';
import IconChargesActivated from '../../assets/IconChargesActivated.svg';
import IconChargesDisabled from '../../assets/IconChargesDisabled.svg';
import Grid from '../Grid';
import Header from '../Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, background: '#F8F8F9', display: 'flex', overflow: 'auto', margin: '0 auto', width: '105%' }}>
          <Typography style={{ fontSize: '.5rem'}}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);
  const [iconActivated, setState] = useState('Tab 0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleState(newValue) {
    setState(newValue);
  }

  return (
    <Box
      sx={{ flex: 1, bgcolor: '#F0F0F5', display: 'flex', height: 'auto', width: '100vw' }}
    >
      <Tabs
        orientation='vertical'
        variant='standard'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{
          borderRight: 1, width: '108px', borderColor: 'divider', '& .MuiTabs-indicator': {
            backgroundColor: '#DA0175',
            height: '4px',
          }
        }}
      >
        <Tab
          icon={<img src={iconActivated === 'Tab 0' ? IconHomeActivated : IconHomeDisabled}
            alt='Tab 0'
            style={{
              opacity: iconActivated === 'Tab 0' ? 1 : 1,
              transition: 'opacity 1s ease',
              width: '50%',
              height: 'auto',
              margin: '10px'
            }}
          />}
          onMouseDown={() => handleState('Tab 0')}
          {...a11yProps(0)}
        />
        <Tab
          icon={<img src={iconActivated === 'Tab 1' ? IconClientActivated : IconClientDisabled}
            alt='Tab 0'
            style={{
              opacity: iconActivated === 'Tab 1' ? 1 : 1,
              transition: 'opacity 1s ease',
              width: '60%',
              height: 'auto',
              margin: '10px'
            }}
          />}
          onMouseDown={() => handleState('Tab 1')}
          {...a11yProps(1)}
        />
        <Tab
          icon={<img src={iconActivated === 'Tab 2' ? IconChargesActivated : IconChargesDisabled}
            alt='Tab 2'
            style={{
              opacity: iconActivated === 'Tab 2' ? 1 : 1,
              transition: 'opacity 1s ease',
              width: '75%',
              height: 'auto',
              margin: '10px'
            }}
          />}
          onMouseDown={() => handleState('Tab 2')}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Header />
        <Grid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

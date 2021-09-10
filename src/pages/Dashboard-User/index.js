import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from "../../providers/user";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Typography } from "@material-ui/core";
import Reviews from "../../components/Profile/Reviews";
import Owned from "../../components/Profile/Owned";
import Wanted from "../../components/Profile/Wanted";
import Transactions from "../../components/Profile/Transactions";

// import { Container } from './styles';

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function DashboardUser(props) {
  const { userId, getId, name, location, rating } = useUser();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Header />
      <div>
        <div>
          <div>imagem</div>
          <h1>{name}</h1>
          <h4>{location}</h4>
          <p>lorem ipsum dolor set amet</p>
        </div>
        <AppBar position="static">
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
            aria-label="coisa"
          >
            <Tab label="Avaliações" />
            <Tab label="Coleção" />
            <Tab label="Desejos" />
            <Tab label="Minhas transações" />
          </Tabs>
        </AppBar>
        <TabPanel value={selectedTab} index={0}>
          <Reviews />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Owned />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <Wanted />
        </TabPanel>
        <TabPanel value={selectedTab} index={3}>
          <Transactions />
        </TabPanel>
      </div>
      <Footer />
    </>
  );
}

export default DashboardUser;

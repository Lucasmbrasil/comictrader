import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from "../../providers/user";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Typography } from "@material-ui/core";
import {
  DashboardBackground,
  DashboardContainer,
} from "../../styles/globalComponents";
import SectionUserCollection from "../../components/SectionUserCollection";
import SectionUserRates from "../../components/SectionUserRates";
import SectionUserTrades from "../../components/SectionUserTrades";

const DashboardUser = () => {
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

  const { userId, getId, name, location, rating } = useUser();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <DashboardBackground>
        <Header />
        <DashboardContainer>
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
                <Tab label="Minhas transações" />
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <SectionUserRates />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <SectionUserCollection />
            </TabPanel>

            <TabPanel value={selectedTab} index={2}>
              <SectionUserTrades />
            </TabPanel>
          </div>
        </DashboardContainer>
        <Footer />
      </DashboardBackground>
    </>
  );
};

export default DashboardUser;

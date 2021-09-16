import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from "../../providers/user";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";
import { DashboardBackground } from "../../styles/globalComponents";
import SectionUserCollection from "../../components/SectionUserCollection";
import SectionUserRates from "../../components/SectionUserRates";
import SectionUserTrades from "../../components/SectionUserTrades";
import { UserInfoBar } from "./styles";
import { useHistory, useParams } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    margin: "0px",
    backgroundColor: "black",
    color: "white",
  },
  tab: {
    fontFamily: "'Urbanist', sans-serif",
    fontSize: "14px",
    textTransform: "capitalize",
  },
});

const DashboardUser = () => {
  const classes = useStyles();
  const profileID = localStorage.getItem("@comictrader:profileID") || "";
  const userId = localStorage.getItem("@comictrader:userID") || "";
  const history = useHistory();
  const {
    name,
    location,
    getId,
    getProfile,
    profileName,
    profileLocation,
    profileRating,
    profileTrades,
  } = useUser();
  const [selectedTab, setSelectedTab] = useState(0);
  const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${name}`;
  const profileAvatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${profileName}`;

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  const params = useParams();

  useEffect(() => {
    if (params.userId === userId) {
      getId();
    }
    getProfile(profileID);
  }, []);

  return (
    <>
      <DashboardBackground>
        <Header />
        {params.userId === userId ? (
          <>
            <UserInfoBar>
              <div className="userImageContainer">
                <img src={avatarURL} alt={name} />
              </div>
              <div className="userProfileInfo">
                <h1>{name}</h1>
                <h2>{location}, Brasil</h2>
                <button>Editar perfil</button>
              </div>
            </UserInfoBar>
            <AppBar position="static" className={classes.root}>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                aria-label="coisa"
              >
                <Tab className={classes.tab} label="Coleção" />
                <Tab className={classes.tab} label="Avaliações" />
                {/* <Tab className={classes.tab} label="Minhas transações" /> */}
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <SectionUserCollection />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <SectionUserRates />
            </TabPanel>

            {/* <TabPanel value={selectedTab} index={2}>
              <SectionUserTrades />
            </TabPanel> */}
          </>
        ) : (
          <>
            <UserInfoBar>
              <div className="userImageContainer">
                <img src={profileAvatarURL} alt={profileName} />
              </div>
              <div className="userProfileInfo">
                <h1>{profileName}</h1>
                <h2>{profileLocation}, Brasil</h2>
                <div className="visitorButtons">
                  <button>Avaliar</button>
                  <button onClick={() => history.push("/test")}>Chat</button>
                </div>
              </div>
            </UserInfoBar>
            <AppBar position="static" className={classes.root}>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                aria-label="coisa"
              >
                <Tab className={classes.tab} label="Avaliações" />
                <Tab className={classes.tab} label="Coleção" />
                {/* <Tab className={classes.tab} label="Minhas transações" /> */}
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <SectionUserRates />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <SectionUserCollection />
            </TabPanel>

            {/* <TabPanel value={selectedTab} index={2}>
              <SectionUserTrades />
            </TabPanel> */}
          </>
        )}
        <Footer />
      </DashboardBackground>
    </>
  );
};

export default DashboardUser;

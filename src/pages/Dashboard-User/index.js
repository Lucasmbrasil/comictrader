import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from "../../providers/user";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { DashboardBackground } from "../../styles/globalComponents";
import SectionUserCollection from "../../components/SectionUserCollection";
import SectionUserRates from "../../components/SectionUserRates";
import { UserInfoBar } from "./styles";
import { useHistory, useParams } from "react-router";
import { Modal } from "@material-ui/core";
import RatingInput from "../../components/RatingInput";
import EditProfile from "../../components/EditProfile";

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
    handleCloseRating,
    handleOpenRating,
    openRating,
  } = useUser();
  const [selectedTab, setSelectedTab] = useState(0);
  const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${name}`;
  const profileAvatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${profileName}`;
  // const [openRating, setOpenRating] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  // const handleOpenRating = () => setOpenRating(true);
  // const handleCloseRating = () => setOpenRating(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenChat = () => setOpenChat(true);
  const handleCloseChat = () => setOpenChat(false);

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
                <button onClick={handleOpenEdit}>Editar perfil</button>
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
                  <button onClick={handleOpenRating}>Avaliar</button>
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
      <Modal open={openEdit} onClose={handleCloseEdit}>
        <EditProfile handleCloseEdit={handleCloseEdit} />
      </Modal>
      <Modal open={openRating} onClose={handleCloseRating}>
        <RatingInput onClose={handleCloseRating} />
      </Modal>
      <Modal open={openChat}></Modal>
    </>
  );
};

export default DashboardUser;

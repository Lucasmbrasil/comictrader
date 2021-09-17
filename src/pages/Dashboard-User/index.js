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
import { UserInfoBar } from "./styles";
import { useParams } from "react-router";
import { Modal } from "@material-ui/core";
import RatingInput from "../../components/RatingInput";
import EditProfile from "../../components/EditProfile";
import { FaWhatsapp } from "react-icons/fa";


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
  }
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DashboardUser = () => {
  const classes = useStyles();
  const profileID = localStorage.getItem("@comictrader:profileID") || "";
  const userId = localStorage.getItem("@comictrader:userID") || "";
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
    cellphone,
  } = useUser();
  const [selectedTab, setSelectedTab] = useState(0);
  const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${name}`;
  const profileAvatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${profileName}`;
  const [openEdit, setOpenEdit] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const chamanozap = `https://api.whatsapp.com/send?phone=55${cellphone}&text=Ol%C3%A1%2C%20${profileName}!%20Encontrei%20seu%20perfil%20no%20comictrade%2C%20gostaria%20de%20trocar%20um%20quadrinho%3F`;

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
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <SectionUserCollection />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <SectionUserRates />
            </TabPanel>
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

                  <a href={chamanozap} target="_blank">
                    <button>
                      <FaWhatsapp />
                    </button>
                  </a>
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
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <SectionUserRates />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <SectionUserCollection />
            </TabPanel>
          </>
        )}

        <Footer />
      </DashboardBackground>
      <Modal open={openEdit} onClose={handleCloseEdit}>
        <EditProfile sx={style} handleCloseEdit={handleCloseEdit} />
      </Modal>
      <Modal open={openRating} onClose={handleCloseRating}>
        <RatingInput onClose={handleCloseRating} />
      </Modal>
      <Modal open={openChat}></Modal>
    </>
  );
};

export default DashboardUser;

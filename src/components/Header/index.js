import { HeaderButton, HeaderMain } from "./styles";
import { useHistory } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";

const Header = () => {
  const { authenticated, setAuthenticated } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory();
  const userId = localStorage.getItem("@comictrader:userID");

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  return (
    <HeaderMain>
      <div className="MenuButton" onClick={handleOpen}>
        <AiOutlineMenu />
      </div>
      {authenticated ? (
        <Menu          
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {handleClose(); history.push("/main")}}>HQs</MenuItem>
          <MenuItem onClick={() => {handleClose(); history.push(`/profile/${userId}`)}}>Perfil</MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
            getContentAnchorEl={null}
            open={openMenu}
            onClose={handleClose}
        >
            <MenuItem onClick={() => {handleClose(); history.push("/login")}}>Login</MenuItem>
            <MenuItem onClick={() => {handleClose(); history.push("/signup")}}>Cadastro</MenuItem>
            <MenuItem onClick={() => {handleClose(); history.push("/main")}}>HQs</MenuItem>
        </Menu>
      )}
      <div onClick={() => history.push("/")} className="HeaderLogo">
        <h1 className="Logo1">COMIC</h1>
        <h1 className="Logo2">TRADER</h1>
      </div>
      {authenticated ? (
        <div className="HeaderButtons">
          <HeaderButton onClick={() => history.push("/main")}>HQs</HeaderButton>
          <HeaderButton onClick={() => history.push(`/profile/${userId}`)}>
            Perfil
          </HeaderButton>
          <HeaderButton onClick={handleLogout}>Sair</HeaderButton>
        </div>
      ) : (
        <div className="HeaderButtons">
          <HeaderButton onClick={() => history.push("/main")}>HQs</HeaderButton>
          <HeaderButton onClick={() => history.push("/signup")}>
            Cadastro
          </HeaderButton>
          <HeaderButton onClick={() => history.push("/login")}>
            Login
          </HeaderButton>
        </div>
      )}
    </HeaderMain>
  );
};

export default Header;

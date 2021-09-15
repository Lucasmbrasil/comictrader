import { HeaderButton, HeaderMain } from "./styles";
import { useHistory } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../../providers/auth";
import { useEffect, useState } from "react";

const Header = ({ setShowDrawer }) => {
  const { authenticated, setAuthenticated } = useAuth();

  const history = useHistory();
  const userId = localStorage.getItem("@comictrader:userID");

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <HeaderMain>
      {authenticated && (
        <div className="MenuButton" onClick={() => setShowDrawer(true)}>
          <AiOutlineMenu />
        </div>
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

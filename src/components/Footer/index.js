import { FooterMain } from "./style";
import { useHistory } from "react-router";

const Footer = () => {

  const history = useHistory();

  return (
    <FooterMain>
      <div className="FooterSignature">@ 2021 G4 - Kenzie Academy Brasil</div>
      <div className="FooterLinks">
        <p onClick={() => history.push("/about")}>Criadores</p>
        <p onClick={() => history.push("/faq")}>Dúvidas</p>
      </div>
    </FooterMain>
  );
};

export default Footer;

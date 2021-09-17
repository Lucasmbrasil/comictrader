import { useHistory } from "react-router";
import { UserCardContainer } from "./styles";

const UserCardList = ({ user }) => {
  const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${user.name}`;
  const history = useHistory();

  return (
    <UserCardContainer
      onClick={() => {
        localStorage.setItem("@comictrader:profileID", user.id);
        history.push(`/profile/${user.id}`);
      }}
    >
      <div>
        <img src={avatarURL} alt={user.name} />
      </div>
      <div className="userCardInfo">
        <h5>{user.name}</h5>
        <h6>{user.state}, Brasil</h6>
      </div>
    </UserCardContainer>
  );
};

export default UserCardList;

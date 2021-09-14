import { RatingsCardContainer } from "./styles";

const RatingsCard = ({user}) => {

    const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${user.name}`

    return (
        <RatingsCardContainer>
            <div>
                <img src={avatarURL} alt={user.name}/>
            </div>
            <div className="userCardInfo">
                <h5>{user.name}</h5>
                <h6>{user.state}, Brasil</h6>
            </div>
        </RatingsCardContainer>
    )
}

export default RatingsCard;
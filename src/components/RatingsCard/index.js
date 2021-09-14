import { RatingsCardContainer } from "./styles";

const RatingsCard = ({user, comment}) => {

    return (
        <RatingsCardContainer>
            <div className="commenterInfo">
                <h5>"{comment}"</h5>
                <h6>{user.name} - {user.state}, Brasil</h6>
            </div>
        </RatingsCardContainer>
    )
}

export default RatingsCard;
const UserCardList = ({user}) => {

    const avatarURL = `https://ui-avatars.com/api/?length=2&rounded=true&background=random&name=${user.name}`

    return (
        <div>
            <img src={avatarURL} alt={user.name}/>
            <div>
                <h5>{user.name}</h5>
                <h6>{user.location}, Brasil</h6>
            </div>
        </div>
    )
}

export default UserCardList;
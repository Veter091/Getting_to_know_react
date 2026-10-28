import './User.css'

function UserProfile(props) {

    const {user} = props
    const {name, email, avatarUrl, bio} = user

    return (
        <div className='user'>
            <img className='user-img' src={avatarUrl} alt="user-img"  />
            <div className='user-name'>{name}</div>
            <div className="user-email">{email}</div>
            <div className="user-bio">{bio}</div>
        </div>
    )
}

export default UserProfile
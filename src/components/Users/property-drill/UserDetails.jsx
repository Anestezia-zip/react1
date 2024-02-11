
const UserDetails = (props) => {
    return(
        <>
            <h3>User Details:</h3>
            <p>{props.user.name}</p>
            <p>{props.user.username}</p>
            <p>{props.user.email}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.website}</p>
            <hr />
        </>
    )
}

export default UserDetails
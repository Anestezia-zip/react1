
const Character = (props) => {
    return(
        <>
            <h3>{props.user.name}</h3>
            <img width={250} src={props.user.image} alt={`Character ${props.name}`} />
            <p>Species: {props.user.species}</p>
            <p>Gender: {props.user.gender}</p>
            <p>Status: {props.user.status}</p>
            <hr />
        </>
    )
}

export default Character
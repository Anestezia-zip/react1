
const Character = (props) => {
    return(
        <>
            <h3>{props.name}</h3>
            <img width={250} src={props.image} alt={`Character ${props.name}`} />
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
            <hr />
        </>
    )
}

export default Character
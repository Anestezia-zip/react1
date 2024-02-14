import { useEffect, useRef, useState } from "react"


const UserComponent = () => {
    const emailRef = useRef('')
    const passRef = useRef('')

    useEffect(() => {
        console.log('User Component render', emailRef.current.value, passRef.current.value);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passRef.current.value,
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))

        console.log('User was successfully created', emailRef.current.value, passRef.current.value);

    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{backgroundColor: 'lightblue', padding:'10px'}}>
            <div>
                Email: <input type="text" ref={emailRef}/>
            </div>
            <div>
                Password: <input type="password" ref={passRef}/>
            </div>
            <div>
                <input type="submit" value='Login'/>
            </div>
        </form>
    </div>
  )
}



// const [email, setEmail] = useState('123');
// const [pass, setPass] = useState('124');
    
//     const [formValue, setFormValue] = useState({
//         email: 'qqq',
//         pass: 'qqq',
//     });
//     const handleFormChange = (key, value) => {
//         setFormValue((prevState) => ({
//             ...prevState,
//             [key]: value
//         }))
//     }

//     useEffect(() => {
//         // console.log('render', email, pass);
//         console.log(formValue);
//     }, [formValue])

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formValue);
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" onChange={(event) => handleFormChange('email', event.target.value)}/>
//             <input type="password" onChange={(event) => handleFormChange('pass', event.target.value)}/>
//             <input type="submit" value='Login'/>
//         </form>
//     </div>
//   )


export default UserComponent

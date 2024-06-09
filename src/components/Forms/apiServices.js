import axios from "axios";
import { AppRoutes } from "../../Routing/AppRoutes";

export const Services = {
    handleComment: (data) => {
        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((resData) => console.log(resData))

        console.log('Comment was sended', data);
    },

    handleUser: async (emailRef, passRef, navigate) => {
        try {
            const user = {
                email: emailRef.current.value,
                password: passRef.current.value,
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            navigate(AppRoutes.USERS)
            localStorage.setItem('authUser', JSON.stringify({...user, id:53536473}))

        } catch (error) {
            console.error(error)
        }


        console.log('User was successfully created with:', emailRef.current.value, passRef.current.value);
    }
}
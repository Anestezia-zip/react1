import axios from "axios";

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

    handleUser: async (emailRef, passRef) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                email: emailRef.current.value,
                password: passRef.current.value,
              });
        } catch (error) {
            console.error(error)
        }


        console.log('User was successfully created with:', emailRef.current.value, passRef.current.value);
    }
}
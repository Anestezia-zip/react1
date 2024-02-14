import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";

const CommentComponent = () => {
    useEffect(() => {
        console.log('Comment Component render');
    })

    const schema = Joi.object({
        title: Joi.string().required(),
        comment: Joi.string().required()
    })

    const { handleSubmit, register, watch, formState: {errors} } = useForm(
        {
            resolver: async (data, context, options) => {
                console.log('formData', data);
                console.log('validation result', await joiResolver(schema)(data, context, options));
                return joiResolver(schema)(data, context, options)
            }
        }
    );

    const onSubmit = (data) => {
        console.log(errors);
        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))

        console.log('Comment was sended', data);
    }

  return (
    <div style={{backgroundColor: 'lightgoldenrodyellow', padding:'10px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                Title: <input type="text" {...register('title', {required: true})}/>
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
                Comment: <input type="text" {...register('comment', {required: true})}/>
                {errors.comment && <span>{errors.comment.message}</span>}
            </div>
            <div>
                <input type="submit" value='Post'/>
            </div>
        </form>
    </div>
  )
}

export default CommentComponent

// const CommentComponent = () => {
//     const emailRef = useRef('')
//     const passRef = useRef('')

//     useEffect(() => {
//         console.log('render');
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3000/api/login', {
//             method: 'POST',
//             body: JSON.stringify({
//                 email: emailRef.current.value,
//                 password: passRef.current.value,
//             })
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" ref={emailRef}/>
//             <input type="password" ref={passRef}/>
//             <input type="submit" value='Login'/>
//         </form>
//     </div>
//   )
// }

// export default CommentComponent
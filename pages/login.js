import { useContext, useState } from "react";
import { Context } from '../context/context'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


const Login = () => {
    const { dispatch } = useContext(Context)
    const router = useRouter();
    const [userCred, setUserCred] = useState({ email: "", password: "" });

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserCred({ ...userCred, [name]: value });
    }


    const signinHandler = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/signin`, {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(userCred)
        })

        const data = await res.json();

        if (data.error) {
            return window.alert(data.error)
        }

        await Cookies.set('jwtoken', data.token, {
            expires: new Date(Date.now() + 60000)
        })

        dispatch({
            type: 'SET_LOGIN',
            payload: true
        })
        setUserCred({ email: "", password: "" })
        console.log(data.message)
        return router.push('/about')
    }

    const formHandler = (e) => {
        e.preventDefault();
        signinHandler()

    }

    return (
        <div>
            <h1>Login page</h1>
            <form>
                <input value={userCred.email} onChange={inputHandler} type="email" name="email" placeholder="Email" />
                <input value={userCred.password} onChange={inputHandler} type="password" name="password" placeholder="Password" />
                <button onClick={formHandler} type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Login

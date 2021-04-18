import { useState } from 'react'
import { useRouter } from 'next/router'

const Signup = () => {
    const router = useRouter();
    const [userCred, setUserCred] = useState({ name: "", email: "", phone: "", work: "", password: "", cpassword: "" });

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserCred({ ...userCred, [name]: value });
    }


    const signupHandler = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/signup`, {
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

        setUserCred({ name: "", email: "", phone: "", work: "", password: "", cpassword: "" })
        window.alert(data.message)
        return router.push('/login')
    }

    const formHandler = (e) => {
        e.preventDefault();
        signupHandler()

    }


    return (
        <div>
            <h1>Signup page</h1>
            <form>
                <input value={userCred.name} onChange={inputHandler} type="text" name="name" placeholder="Full name" />
                <input value={userCred.email} onChange={inputHandler} type="email" name="email" placeholder="Email" />
                <input value={userCred.phone} onChange={inputHandler} type="tel" name="phone" placeholder="Phone" />
                <input value={userCred.work} onChange={inputHandler} type="text" name="work" placeholder="Work" />
                <input value={userCred.password} onChange={inputHandler} type="password" name="password" placeholder="Password" />
                <input value={userCred.cpassword} onChange={inputHandler} type="password" name="cpassword" placeholder="Confirm Password" />
                <button onClick={formHandler} type="submit" >Signup</button>
            </form>
        </div>
    )
}

export default Signup

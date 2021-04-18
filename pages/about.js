import { authenticate } from '../helper/authHelper';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context/context'

const About = () => {
    const { state, dispatch } = useContext(Context)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setisAuthenticated] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        authenticate()
            .then(data => {
                if (data.error) {
                    dispatch({
                        type: "SET_LOGIN",
                        payload: false,
                    })
                    return router.push('/login')
                }

                setisAuthenticated(data.userId);
                setIsLoading(false);
            })
            .catch(err => { console.log(err) });

    }, [state.isLoggedIn])

    return (
        <div>
            {!isAuthenticated || isLoading ? <h1>Loading...</h1>
                :
                (
                    <>
                        <h1>Hello About</h1>
                    </>
                )
            }
        </div>
    )
}

export default About

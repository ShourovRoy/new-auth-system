import Link from 'next/link'
import { Context } from '../../context/context'
import { useContext, useEffect } from 'react'
import { authenticate } from '../../helper/authHelper'

const Navbar = () => {

    const { state, dispatch } = useContext(Context)
    const { isLoggedIn } = state;


    // useEffect(() => {
    //     authenticate()
    //         .then(data => {
    //             if (!data || data.error) {
    //                 console.log('Error happened!')
    //                 dispatch({
    //                     type: 'SET_LOGIN',
    //                     payload: false,
    //                 })
    //             } else {
    //                 console.log('Working auth')
    //                 dispatch({
    //                     type: 'SET_LOGIN',
    //                     payload: true,
    //                 })
    //             }

    //         })
    //         .catch(err => { console.log(err) });
    //         console.log('Workined in nav')
    // }, [state.isLoggedIn])


    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                {isLoggedIn && (
                    <>
                        <li>
                            <Link href='/'>Logout</Link>
                        </li>
                        <li>
                            <Link href='/'>Logout All</Link>
                        </li>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                        <li>
                            <Link href='/login'>Login</Link>
                        </li>
                        <li>
                            <Link href='/signup'>Signup</Link>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}

export default Navbar

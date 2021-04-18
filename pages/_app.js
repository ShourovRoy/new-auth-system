import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { Context } from '../context/context'
import { useReducer, useEffect } from 'react'
import { reducer } from '../context/reducer'
import Cookies from 'js-cookie'

const initialState = {
  isLoggedIn: false,
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    // if (localStorage.getItem('jwtoken')) {
    //   dispatch({
    //     type: 'SET_LOGIN',
    //     payload: true,
    //   })
    // }

    if (Cookies.get('jwtoken')) {
      dispatch({
        type: 'SET_LOGIN',
        payload: true,
      })
    }

  }, [state.isLoggedIn])

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>

  )
}

export default MyApp

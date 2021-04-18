export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return { ...state, isLoggedIn: action.payload }
        default:
            return state
    }
}
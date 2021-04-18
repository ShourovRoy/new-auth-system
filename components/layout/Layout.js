import Navbar from "../libs/Navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout

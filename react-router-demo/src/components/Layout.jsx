import { Outlet, useLoaderData } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav style={{
                backgroundColor: "yellow"
            }}>
                Ini navbar
            </nav>
            <Outlet />

        </>
    )
}

export default Layout;
import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "../views/Home";
import Profile from "../views/Profile";
import Login from "../views/Login";
import ProfileDetail from "../components/ProfileDetail";
import Layout from "../components/Layout";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        errorElement: "", // element khusus ketika error
        loader: () => {
            let token = localStorage.getItem("access_token")
            console.log(token)
            if (!token) {
                // jika tokennya gaada
                throw redirect("/login")
            }
            // yang ini ada
            return null

        },
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/profile/:id',
                element: <Profile />,
                children: [
                    {
                        path: "detail",
                        element: <ProfileDetail />
                    }
                ]
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            let token = localStorage.getItem("access_token")
            if (token) {
                throw redirect("/")
            }
            return null
        }
    }
])

export default router;
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    let params = useParams()
    let id = params.id
    let navigate = useNavigate()

    function showDetail() {
        navigate(`detail`)
    }

   

    return (
        <div>
            Ini profile {id}
            <button onClick={showDetail}>Show profile detail</button>
            <Outlet />
        </div>
    )
}

export default Profile;
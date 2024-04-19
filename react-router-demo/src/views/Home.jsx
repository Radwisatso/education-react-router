import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>
                Ini home
            </div>
            <Link to="/profile/1">Ke profile</Link>
        </>
    )
}

export default Home;
import { Link } from "react-router-dom";

function Profile() {    

    return (
    <>
        <header>
            <h1>Foodgo</h1>
            <Link to={"/"}>
                Home
            </Link>
        </header>
    </>
  )

}

export default Profile;
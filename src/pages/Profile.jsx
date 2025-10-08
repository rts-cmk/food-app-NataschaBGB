import { Link } from "react-router-dom";

import profilepic from '../assets/images/profilepic.png'

import arrow_white from '../assets/icons/arrow-white.png'
import settings from '../assets/icons/settings.png'
import edit from '../assets/icons/edit.png'
import logout from '../assets/icons/logout.png'
import lock from '../assets/icons/lock.png'


import '../style/Profile.css'

function Profile() {    

    return (
    <section className="profile-wrapper">
        <header className="profile-header"> 
            <Link to={"/"}>
                <img src={arrow_white} alt="back" />
            </Link>
            <img src={settings} alt="settings" />
            <img src={profilepic} className="profile-pic" alt="profile-pic" />
        </header>
        <main className="profile-main">
            <section className="profile">
                <div className="profile-name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" value="Sophia Patel" readOnly/>
                </div>
                <div className="profile-email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" value="sophiapatel@gmail.com" readOnly/>
                </div>
                <div className="profile-address">
                    <label htmlFor="address">Delivery address</label>
                    <input type="text" id="address" placeholder="address" value="123 Main St Apartment 4A,New York, NY" readOnly/>
                </div>
                <div className="profile-password">
                    <div className="label">
                        <label htmlFor="password">Password</label>
                        <img src={lock} alt="lock-icon" />
                    </div>
                    <input type="password" id="password"  readOnly/>
                </div>
            </section>
        </main>
        <footer className="profile-footer">
            <section className="edit">
                <h2>Edit Profile</h2>
                <img src={edit} className="edit-img" alt="edit-icon" />
            </section>
            <section className="logout">
                <h2>Log out</h2>
                <img src={logout} className="logout-img" alt="logout-icon" />
            </section>
        </footer>
    </section>
  )

}

export default Profile;

import profileImage from "../assets/profileImage.avif";

const ProfileCard = () => {
    return (<>
        <div className="profile-card">
            <img src={profileImage} alt="Profile" />

            <h2>Jan</h2>

            <p>Frontend Developer</p>

            <button>View Profile</button>
        </div>
        </>
    );
};

export default ProfileCard;
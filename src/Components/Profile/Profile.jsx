import React from "react";
import ProfileImg from "../../assets/profile.jpeg";
function Profile() {
  return (
    <>
      <div className="profile-box">
        <h3>
          Information <span className="edit">Edit</span>
        </h3>
        <div className="profile-content">
          <figure>
            <img src={ProfileImg} alt="" />
          </figure>
          <div className="profile-text">
            <h4>Jane Doe</h4>
            <h5>
              Email: <span>td0540245@gmail.com</span>
            </h5>
            <h5>
              Phone: <span>112233445566</span>
            </h5>
            <h5>
              Address: <span>5/44 east west Street lane</span>
            </h5>
            <h5>
              Country: <span>Atlantis</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

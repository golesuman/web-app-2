// Profile.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profile.scss";

const Profile = () => {
  const url = "ecommerce/user-profile";
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProfile(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (profile) {
    console.log(profile);
    const { user, profile: profileImageUrl, description } = profile;

    return (
      <div className="profile-container">
        <div className="profile-card">
          <h1>My Profile</h1>
          <div className="profile-card__avatar">
            <img
              src={`http://localhost:8000/${profileImageUrl}`}
              alt="Profile Avatar"
            />
          </div>
          <div className="profile-card__content">
            <h2 className="profile-card__name">
              {user.first_name} {user.last_name}
            </h2>
            <h3 className="profile-card__name_small">@{user.username}</h3>
            <p className="profile-card__bio">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Profile;

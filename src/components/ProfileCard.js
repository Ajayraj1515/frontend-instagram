import React from 'react';

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-card">
      <img src={profile.profile_picture_url} alt={profile.username} />
      <h3>{profile.name}</h3>
      <p>@{profile.username}</p>
      <p>ID: {profile.id}</p>
      {/* Add other profile details you want to display */}
    </div>
  );
};

export default ProfileCard; // Make sure this line exists
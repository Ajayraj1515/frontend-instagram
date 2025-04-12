import React, { useState, useEffect } from 'react';
import { getUserProfile, getUserFeed } from '../services/api';
import ProfileCard from '../components/ProfileCard';
import Feed from '../components/Feed';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [feed, setFeed] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingFeed, setLoadingFeed] = useState(true);
  const [error, setError] = useState('');
  const accessToken = new URLSearchParams(window.location.search).get('accessToken');

  useEffect(() => {
    if (accessToken) {
      const fetchProfileData = async () => {
        try {
          const profileData = await getUserProfile(accessToken);
          setProfile(profileData);
        } catch (err) {
          setError('Failed to fetch profile information.');
          console.error('Error fetching profile:', err);
        } finally {
          setLoadingProfile(false);
        }
      };

      const fetchFeedData = async () => {
        try {
          const feedData = await getUserFeed(accessToken);
          setFeed(feedData);
        } catch (err) {
          setError('Failed to fetch user feed.');
          console.error('Error fetching feed:', err);
        } finally {
          setLoadingFeed(false);
        }
      };

      fetchProfileData();
      fetchFeedData();
    } else {
      setError('Access token not found. Please log in.');
      setLoadingProfile(false);
      setLoadingFeed(false);
    }
  }, [accessToken]);

  if (error) {
    return <div className="container"><p className="error">{error}</p></div>;
  }

  return (
    <div className="container">
      <h1>Instagram Dashboard</h1>
      {loadingProfile ? (
        <p>Loading profile information...</p>
      ) : (
        profile && <ProfileCard profile={profile} />
      )}
      <h2>Your Feed</h2>
      {loadingFeed ? (
        <p>Loading feed...</p>
      ) : (
        <Feed feed={feed} />
      )}
    </div>
  );
};

export default Dashboard; // Make sure this line exists
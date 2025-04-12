import React from 'react';
import PostCard from './PostCard';

const Feed = ({ feed }) => {
  if (!feed || feed.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="feed-container">
      {feed.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed; // Make sure this line exists
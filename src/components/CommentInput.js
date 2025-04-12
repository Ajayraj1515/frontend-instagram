import React, { useState } from 'react';

const CommentInput = ({ postId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      // Implement logic to send the new comment to the backend if needed
      console.log(`Commenting on post ${postId}:`, commentText);
      onCommentSubmit(commentText);
      setCommentText('');
    }
  };

  return (
    <form className="comment-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="comment-input"
        placeholder="Add a comment..."
        value={commentText}
        onChange={handleChange}
      />
      <button type="submit" className="reply-button">Post</button>
    </form>
  );
};

export default CommentInput; // Make sure this line exists
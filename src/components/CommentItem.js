import React, { useState } from 'react';

const CommentItem = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = (event) => {
    event.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <li className="comment-item">
      <strong>{comment.user.username}:</strong> {comment.text}
      {!isReplying && (
        <button onClick={() => setIsReplying(true)} className="reply-button">Reply</button>
      )}
      {isReplying && (
        <form className="comment-input-container" onSubmit={handleReplySubmit}>
          <input
            type="text"
            className="comment-input"
            placeholder="Reply to this comment..."
            value={replyText}
            onChange={handleReplyChange}
          />
          <button type="submit" className="reply-button">Send</button>
          <button onClick={() => setIsReplying(false)}>Cancel</button>
        </form>
      )}
    </li>
  );
};

export default CommentItem; // Make sure this line exists
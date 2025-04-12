import React, { useState, useEffect } from 'react';
import { getPostComments, replyToComment } from '../services/api';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const PostCard = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [errorComments, setErrorComments] = useState('');
  const accessToken = new URLSearchParams(window.location.search).get('accessToken');

  useEffect(() => {
    const fetchComments = async () => {
      if (accessToken && post.id) {
        setLoadingComments(true);
        try {
          const data = await getPostComments(post.id, accessToken);
          setComments(data);
        } catch (error) {
          setErrorComments('Failed to load comments.');
          console.error('Error loading comments:', error);
        } finally {
          setLoadingComments(false);
        }
      }
    };

    fetchComments();
  }, [accessToken, post.id]);

  const handleReply = async (commentId, message) => {
    if (accessToken && post.id && commentId && message) {
      try {
        await replyToComment(post.id, commentId, message, accessToken);
        // Optionally refresh comments after replying
        // fetchComments(); // You might need to re-fetch comments here
      } catch (error) {
        console.error('Error replying to comment:', error);
        alert('Failed to reply to comment.');
      }
    } else {
      alert('Missing required information to reply.');
    }
  };

  return (
    <div className="post-card">
      {post.media_type === 'IMAGE' && <img src={post.media_url} alt={post.caption} />}
      {post.media_type === 'VIDEO' && <video src={post.media_url} controls />}
      <div className="post-details">
        {post.caption && <p>{post.caption}</p>}
        <div className="comment-section">
          <h4>Comments</h4>
          {loadingComments && <p>Loading comments...</p>}
          {errorComments && <p className="error">{errorComments}</p>}
          {comments && comments.length > 0 ? (
            <ul className="comment-list">
              {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} onReply={handleReply} />
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
          <CommentInput postId={post.id} onCommentSubmit={() => { /* Implement adding new comment if needed */ }} />
        </div>
      </div>
    </div>
  );
};

export default PostCard; // Make sure this line exists
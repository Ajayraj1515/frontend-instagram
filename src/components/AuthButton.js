import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }

  .instagram-icon {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

const AuthButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/instagram/login';
  };

  return (
    <StyledButton onClick={handleLogin}>
      <span>Login with Instagram</span>
    </StyledButton>
  );
};

export default AuthButton;
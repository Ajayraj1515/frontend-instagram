import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthButton from './components/AuthButton';
import Dashboard from './pages/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4; /* Optional: Background color for the page */
`;

const ContentContainer = styled.div`
  /* You can add styles for the content within the centered area if needed */
  background-color: #fff; /* Optional: Background for the content box */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center text within the content area */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<AuthButton />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
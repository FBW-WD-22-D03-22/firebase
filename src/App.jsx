import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Header } from './ui/components/Header';
import { AdminPage } from './ui/views/AdminPage';
import { LandingPage } from './ui/views/LandingPage';
import { SignIn } from './ui/views/SignIn';
import { LoginPage } from './ui/views/LoginPage';
import { UserPage } from './ui/views/UserPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

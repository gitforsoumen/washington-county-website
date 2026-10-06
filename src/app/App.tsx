import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import NotificationBar from './components/NotificationBar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CommunityDevelopmentPage from './components/CommunityDevelopmentPage';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'community-development':
        return <CommunityDevelopmentPage onNavigate={handleNavigate} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <NotificationBar onDismiss={() => setIsNotificationVisible(false)} />
        <Header 
          onNavigate={handleNavigate} 
          currentPage={currentPage}
          isNotificationVisible={isNotificationVisible}
        />
        <main id="main-content" role="main" tabIndex={-1}>
          {renderPage()}
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
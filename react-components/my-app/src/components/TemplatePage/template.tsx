import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function TemplatePage() {
  return (
    <div className="body__container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default TemplatePage;

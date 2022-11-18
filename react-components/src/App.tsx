import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppProvider } from './context/contex';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Page404 from './components/Page404/Page404';
import FormPage from './components/FormComponent/FormPage';
import TemplatePage from './components/TemplatePage/Template';
import CardPage from 'components/CardPage/CardPage';
import './App.css';
import './global/global.scss';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<TemplatePage />}>
            <Route path="/" element={<Main />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="person" element={<CardPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;

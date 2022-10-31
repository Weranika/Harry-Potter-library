import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Main from 'components/main/Main';
import AboutUs from 'components/AboutUs/AboutUs';
import Page404 from 'components/page404/Page404';
import FormPage from 'components/FormComponent/FormPage';
import TemplatePage from 'components/TemplatePage/Template';
import './App.css';
import './global/global.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route path="/" element={<Main inputSearch="1" />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="form" element={<FormPage cardList={[]} />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

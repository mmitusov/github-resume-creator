import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import React from 'react'
import ResumePage from './pages/ResumePage';
import StartPage from './pages/StartPage';
import { NOT_FOUND_ROUTE, RESUME_ROUTE, START_PAGE_ROUTE } from './utils/consts';
import NotFound from './pages/NotFound';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={START_PAGE_ROUTE} element={<StartPage />}/>
        <Route path={RESUME_ROUTE} element={<ResumePage />}/>
        <Route path={NOT_FOUND_ROUTE} element={<NotFound />}/>        
        <Route path="*" element={<Navigate to={START_PAGE_ROUTE} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

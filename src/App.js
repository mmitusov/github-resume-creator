import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import React from 'react'
import ResumePage from './pages/ResumePage';
import StartPage from './pages/StartPage';
import { NOT_FOUND_ROUTE, RESUME_ROUTE, START_PAGE_ROUTE } from './utils/consts';
import NotFound from './pages/NotFound';

//Navigate - используется для привязки конкретного компонента к конкретному маршруту в строке запроса
//useNavigate() - используется в функциях, чтобы после выполнения определенной логики, мы могли сказать - теперь перенеси меня на следующею страницу
//useLocation() - когда при использовании "navigate(RESUME_ROUTE, {state: data}) (P.S. Слово state здесь зарезервировано, другое использовать нельзя)" мы хотим еще и передать пропсом какую-то инфу в слудующий компонет
//то внутри того компоненка куда мы хотим пердать инфу, нужно соспользоваться useLocation() чтобы ее получить. useNavigate() - отправляет, useLocation() - получает
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

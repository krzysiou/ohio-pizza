import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };


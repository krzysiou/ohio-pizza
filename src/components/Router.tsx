import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Menu, Contact } from './pages';
import { Login } from './pages/Login/Login';
import { Admin } from './pages/Admin/Admin';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };

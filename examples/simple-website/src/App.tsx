import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppWithDrawer from './pages/drawer.page';
import SimpleWebsite from './pages/website.page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/simple-website" />} />
        <Route path="/simple-website" element={<SimpleWebsite />} />
        <Route path="/app-with-drawer" element={<AppWithDrawer />} />
      </Routes>
    </BrowserRouter>
  );
}

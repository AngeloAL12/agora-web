import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'
import SupportPage from './pages/SupportPage.tsx'
import TermsPage from './pages/TermsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/soporte" element={<SupportPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
)

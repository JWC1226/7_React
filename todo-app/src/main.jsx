import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter: 라우팅 기능을 활성화・최상위 컴포넌트를 감싸준다 */}
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

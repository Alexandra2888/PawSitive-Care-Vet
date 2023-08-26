import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { AppProvider } from "./../contexts/DarkModeContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);

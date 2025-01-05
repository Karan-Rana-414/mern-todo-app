import { createRoot } from 'react-dom/client';  
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import store from './redux/store.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

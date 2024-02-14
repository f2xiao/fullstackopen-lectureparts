import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let counter = 1;

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const refresh = () => { 
    root.render(
        <App counter={counter} />
    ) 
 }

 refresh();

 setInterval(() => { 
    refresh();
    counter ++;
  }, 1000)
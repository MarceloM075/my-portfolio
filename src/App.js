import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './config/MyRoutes';
import Links from './components/Links/Links';

function App() {

  function showNavBar(){
    const url = window.location.pathname
    if(url === ''){
      return 
    }
    else if(url !== '/'){
      return (
        <Links />
      )
    }

  }

  return (
    <>
      {showNavBar()}
      <BrowserRouter>
        <div className="App">
            <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import {Routes,Route} from 'react-router-dom'
import MainPage from './Pages/HomePage/Main/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Routes>
      <Route path='/' element = {<MainPage/>} />
    </Routes>
  );
}

export default App;

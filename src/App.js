
import './App.css';
import {Routes,Route} from 'react-router-dom'
import MainPage from './Pages/HomePage/Main/MainPage';
import BoardPage from './Pages/Board/BoardPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Routes>
      <Route path='/' element = {<MainPage/>} />
      <Route path='/board' element= {<BoardPage/>}/>
    </Routes>
  );
}

export default App;

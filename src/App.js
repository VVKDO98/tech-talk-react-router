import {Routes, Route} from 'react-router-dom';
import Sources from './pages/Sources';
import Home from './pages/Home';
import Install from './pages/Install';
import Use from './pages/Use';
import Navbar from './utility/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/install' element={<Install/>}/>
          <Route path='/use' element={<Use/>}/>
          <Route path='/sources' element={<Sources/>}/>
      </Routes>
    </div>
  );
}

export default App;
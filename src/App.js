import './App.css';
import Home from './Home/Home';
import Content from './Content/Content';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Scan' element={<Content/>}/>
        </Routes>
    </Router>
  );
}

export default App;

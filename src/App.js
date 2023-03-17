import './scss/main.scss';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Details } from './components/Details';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/country/:country' element={<Details/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

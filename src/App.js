import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import User from './components/pages/user';
import Main from './components/pages/containers/main';
import Secundary from './components/pages/containers/secundary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Secundary />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

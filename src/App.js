import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import User from './components/pages/user';
import Details from './components/pages/details';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

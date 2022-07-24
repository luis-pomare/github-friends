import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Featured from './components/featured';
import Header from './components/header';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Featured />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

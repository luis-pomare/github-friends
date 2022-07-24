import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Featured from './components/featured';
import Header from './components/header';
import Details from './components/pages/details';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Featured />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

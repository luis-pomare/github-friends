import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Featured from './components/featured';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Featured />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

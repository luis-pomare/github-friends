import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

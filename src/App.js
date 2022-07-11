import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import CreatePage from './pages/CreatePage';
import Delete from './pages/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import NavBar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import CreateRecipe from './pages/createRecipe';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/create' element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

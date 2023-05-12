import NavBar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import CreateRecipe from './pages/createRecipe';
import FavoritesPage from './pages/favorites';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />

        <Route path='/create' element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;

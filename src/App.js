// import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import './App.css';
import Container from './components/Container/Container.jsx';
import Header from './components/Header/Header.jsx';
import HomeView from './views/HomeView/HomeView.jsx';
import MovieView from './views/MovieView/MovieView.jsx';
import NotFoundView from './views/NotFoundView/NotFoundView.jsx';
import SearchView from './views/SearchView/SearchView.jsx';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews'

// const HomeView = lazy(() =>
//   import('./views/HomeView/HomeView.jsx' /* webpackChunkName: HomeView */));

function App() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route exact="true" path='/' element={<HomeView/>} />
          <Route exact="true" path='/movies' element={<SearchView/>} />
          <Route path='/movies/:movId' element={<MovieView/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route element={<NotFoundView/>} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;



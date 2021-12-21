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

// const HomeView = lazy(() =>
//   import('./views/HomeView/HomeView.jsx' /* webpackChunkName: HomeView */));

function App() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route exact path='/' element={<HomeView/>} />
          <Route path='/movies' element={<MovieView/>} />
          <Route element={<NotFoundView/>} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;



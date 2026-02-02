import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Movies from './components/Movies'; 
import Navbar from './components/Navbar';
import MovieGrid from './components/MovieGrid';
import ContinueWatchingGrid from './components/ContinueWatchingGrid';
import PricingPlans from './components/PricingPlans';
import Articles from './components/Articles';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <MovieGrid />
              <ContinueWatchingGrid />
              <PricingPlans />
              <Articles />
              <Footer />
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <>
              <Navbar />
              <Movies />
              <MovieGrid />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

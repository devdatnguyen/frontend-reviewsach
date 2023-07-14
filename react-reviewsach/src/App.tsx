import './App.css';
import { NavBar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

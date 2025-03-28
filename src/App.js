import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import HomePage from './customer/pages/HomePage/HomePage'; 
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
      <HomePage/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;

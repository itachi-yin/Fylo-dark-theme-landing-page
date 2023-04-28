// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Article from './components/Article/Article';
import Review from './components/Reviews/Review';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Header></Header>
    <Features></Features>
    <Article></Article>
    <Review></Review>
    <Footer></Footer>
    </div>
  );
}

export default App;

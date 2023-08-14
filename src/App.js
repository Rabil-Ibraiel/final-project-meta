import './App.css';
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Button from './components/button/Button';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
      <Button text={"Reserve a Table"}/>
    </>
  );
}

export default App;

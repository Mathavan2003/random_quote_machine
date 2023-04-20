import './App2.css';
import Quotes from './components/Quotes';
import Img from './components/Einstein';


function App() {
  return (
    <div>
      <div className='container'>
        <header className='head'>
          <h1>My Random Quote Machine</h1>
        </header>
        <Quotes /> 
        <Img />
        <footer className='foot'>
          <h3>About</h3>
          <h4>Contact me</h4>
          <h4>Phone Number : 9345823358</h4>
          <h4>Email address : maddymathavan@gmail.com</h4>
          <h4>@Copyright My Random Quote Machine</h4>
        </footer>
      </div>
    </div>
  );
}
export default App;

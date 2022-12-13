import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
   
      <Navbar />
      {/* <Main /> */}
      <Hero />
       <Card 
                // img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
    </div>
  );
}

export default App;

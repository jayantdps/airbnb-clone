// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Main from './components/Main';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {


  const cards = data.map(item => {
    return (
        // <Card 
        //     key={item.id}
        //     img={item.coverImg}
        //     rating={item.stats.rating}
        //     reviewCount={item.stats.reviewCount}
        //     location={item.location}
        //     title={item.title}
        //     price={item.price}
        //     openSpots={item.openSpots}
        // />
        <Card
        key={item.id}
        item={item}
        // {...item}
    />
    )
})        

  return (
    <div className="App">
   
      <Navbar />
      {/* <Main /> */}
      <Hero />
      <section  className="cards-list">
      {cards}
      </section>
   
    </div>
  );
}

export default App;


import Header from "./Components/Header"
import './App.css';
import Card from "./Components/Card"
import data from "./data"

function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="card--list"> 
        {cards}
      </section>
    </div>
  );
}

export default App;

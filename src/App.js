import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Rangpur-Technologies</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most productive softwarer development products.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's true</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

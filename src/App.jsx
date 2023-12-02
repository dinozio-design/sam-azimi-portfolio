// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

// add styles for header, body, and charly

function App() {
  return (
    <>
      {/* add body */}
      {/* ass Feed Charly */}
      <div className="App">
        <Header/>
        <main className="App-body">
          <section>About</section>
          <section>Projects</section>
          <section>Footer</section>
        </main>
      </div>
    </>
  );
}

export default App;

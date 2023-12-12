import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';

// add styles for header, body, and charly
const styles = {
  appContainer: {
    fontSize: "calc(10px + 2vmin)"
  }
};

function App() {
  return (
    <>
      <div style={styles.appContainer} className="App">
        <Header />
        <MainPage />
      </div>
    </>
  );
}

export default App;

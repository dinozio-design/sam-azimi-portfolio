import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';

// add styles for header, body, and charly
const styles = {
  appContainer: {
    fontSize: "calc(10px + 2vmin)",
    // display: "block"
  },
  "@media only screen and (min-width:993px)": {
    appContainer: {
      display: "flex",
      flexWrap: "wrap"
    }
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

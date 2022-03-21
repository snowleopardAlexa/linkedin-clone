import './App.css';
import Sidebar from './components/AppBody/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <div className="app">
      <Header />
    </div>
    <div className="app__body">
      <Sidebar />
    </div>
    </>
  );
}

export default App;

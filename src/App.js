import Header from './components/layout/Header'
import Forecast from './components/Forecast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
            <Route path='/' element={<Header />} />
        </Routes>
        <Forecast />
      </main>
      </Router>
  );
}

export default App;

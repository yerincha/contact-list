import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
// import Edit from './pages/edit';

function App() {
  return (
    <div className="contact-list">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/edit" component={Edit} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

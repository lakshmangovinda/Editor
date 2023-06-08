
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Editor from './Components/Editor';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/edit/:id" exact element={<Editor/>} />
    </Routes>
     
  </Router>
  );
}

export default App;

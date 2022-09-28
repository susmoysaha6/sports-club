import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <h3>Hello World</h3>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

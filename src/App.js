import './index.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  //const title = 'Welcome to the new blog'
  // const person = {name:'reem', age:23}
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
